<template>
  <div class="analytics-page px-4 px-md-6 py-4 py-md-6">
    <div class="hero-panel">
      <div>
        <div class="eyebrow">Repository Intelligence</div>
        <h1 class="hero-title">
          {{ repoTitle }}
        </h1>
        <p class="hero-copy">
          后端动态指定仓库，前端只负责展示代码体量、语言分布、核心贡献者和提交节奏。
        </p>
      </div>

      <div class="hero-meta">
        <div class="meta-chip">
          <span class="meta-label">Branch</span>
          <span class="meta-value">{{ analysis.repository.branch }}</span>
        </div>
        <div class="meta-chip">
          <span class="meta-label">Updated</span>
          <span class="meta-value">{{ updatedLabel }}</span>
        </div>
        <div class="meta-chip">
          <span class="meta-label">Source</span>
          <span class="meta-value">{{ sourceLabel }}</span>
        </div>
      </div>
    </div>

    <v-alert
      v-if="source === 'fallback'"
      class="mt-4"
      border="left"
      colored-border
      color="warning"
      icon="mdi-database-alert-outline"
    >
      当前未从 `/api/repository/analysis` 取到数据，页面正在展示内置样例结果，接口接通后会自动切换。
    </v-alert>

    <v-progress-linear
      v-if="loading"
      indeterminate
      color="primary"
      rounded
      class="mt-4"
    />

    <v-row class="mt-2">
      <v-col
        v-for="item in statCards"
        :key="item.label"
        cols="12"
        md="6"
        xl="3"
      >
        <v-card class="metric-card" outlined>
          <div class="metric-top">
            <div>
              <div class="metric-label">{{ item.label }}</div>
              <div class="metric-value">{{ item.value }}</div>
            </div>
            <v-avatar :color="item.color" size="52">
              <v-icon dark>{{ item.icon }}</v-icon>
            </v-avatar>
          </div>
          <div class="metric-note">{{ item.note }}</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xl="8">
        <v-card class="panel-card" outlined>
          <div class="panel-head">
            <div>
              <div class="panel-kicker">Commit Rhythm</div>
              <div class="panel-title">提交频率趋势</div>
            </div>
            <div class="panel-caption">
              最近 {{ analysis.commitFrequency.length }} 个时间点
            </div>
          </div>

          <apexchart
            v-if="chartReady"
            height="340"
            type="area"
            :options="commitChartOptions"
            :series="commitChartSeries"
          />
        </v-card>
      </v-col>

      <v-col cols="12" md="6" xl="4">
        <v-card class="panel-card panel-fill" outlined>
          <div class="panel-head">
            <div>
              <div class="panel-kicker">Language Mix</div>
              <div class="panel-title">语言占比</div>
            </div>
          </div>

          <apexchart
            v-if="chartReady"
            height="340"
            type="donut"
            :options="languageChartOptions"
            :series="languageChartSeries"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="7">
        <v-card class="panel-card" outlined>
          <div class="panel-head">
            <div>
              <div class="panel-kicker">Code Volume</div>
              <div class="panel-title">语言代码行数</div>
            </div>
          </div>

          <apexchart
            v-if="chartReady"
            height="360"
            type="bar"
            :options="linesChartOptions"
            :series="linesChartSeries"
          />
        </v-card>
      </v-col>

      <v-col cols="12" lg="5">
        <v-card class="panel-card panel-fill" outlined>
          <div class="panel-head">
            <div>
              <div class="panel-kicker">Top Contributors</div>
              <div class="panel-title">主要贡献者</div>
            </div>
          </div>

          <div class="contributors">
            <div
              v-for="contributor in analysis.contributors"
              :key="contributor.name"
              class="contributor-row"
            >
              <div class="d-flex align-center">
                <v-avatar color="#dbeafe" size="42">
                  <span class="avatar-text">
                    {{ initials(contributor.name) }}
                  </span>
                </v-avatar>
                <div class="ml-3">
                  <div class="contributor-name">{{ contributor.name }}</div>
                  <div class="contributor-meta">
                    +{{ formatNumber(contributor.additions) }} /
                    -{{ formatNumber(contributor.deletions) }}
                  </div>
                </div>
              </div>

              <div class="text-right">
                <div class="contributor-commit">
                  {{ formatNumber(contributor.commits) }}
                </div>
                <div class="contributor-meta">commits</div>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="panel-card" outlined>
          <div class="panel-head">
            <div>
              <div class="panel-kicker">Language Details</div>
              <div class="panel-title">代码统计明细</div>
            </div>
          </div>

          <v-simple-table class="stats-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>语言</th>
                  <th>代码行数</th>
                  <th>占比</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="language in analysis.languages"
                  :key="language.name"
                >
                  <td>
                    <div class="d-flex align-center">
                      <span
                        class="language-dot mr-3"
                        :style="{ backgroundColor: language.color }"
                      ></span>
                      {{ language.name }}
                    </div>
                  </td>
                  <td>{{ formatNumber(language.lines) }}</td>
                  <td>{{ language.percentage }}%</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  fetchRepositoryAnalysis,
  formatDateLabel,
} from "@/services/repositoryAnalysis";

export default {
  name: "Home",
  data: () => ({
    loading: true,
    chartReady: false,
    source: "api",
    analysis: {
      repository: {
        owner: "",
        name: "",
        branch: "",
        updatedAt: "",
      },
      summary: {
        totalLines: 0,
        totalCommits: 0,
        totalContributors: 0,
        dominantLanguage: "",
      },
      languages: [],
      contributors: [],
      commitFrequency: [],
    },
  }),
  computed: {
    repoTitle() {
      const { owner, name } = this.analysis.repository;
      return owner && name ? `${owner} / ${name}` : "Repository Dashboard";
    },
    updatedLabel() {
      return formatDateLabel(this.analysis.repository.updatedAt);
    },
    sourceLabel() {
      return this.source === "api" ? "Live API" : "Fallback Sample";
    },
    statCards() {
      return [
        {
          label: "总代码行数",
          value: this.formatNumber(this.analysis.summary.totalLines),
          note: "按语言汇总的总代码体量",
          icon: "mdi-code-tags",
          color: "#0f766e",
        },
        {
          label: "主要语言",
          value: this.analysis.summary.dominantLanguage,
          note: "当前仓库占比最高的实现语言",
          icon: "mdi-layers-triple",
          color: "#7c3aed",
        },
        {
          label: "贡献者数量",
          value: this.formatNumber(this.analysis.summary.totalContributors),
          note: "已识别的核心贡献者数量",
          icon: "mdi-account-group",
          color: "#ea580c",
        },
        {
          label: "总提交数",
          value: this.formatNumber(this.analysis.summary.totalCommits),
          note: "用于趋势统计的历史提交量",
          icon: "mdi-source-commit",
          color: "#2563eb",
        },
      ];
    },
    commitChartOptions() {
      return {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false },
          foreColor: "#475569",
        },
        colors: ["#2563eb"],
        dataLabels: { enabled: false },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.35,
            opacityTo: 0.04,
            stops: [0, 90, 100],
          },
        },
        grid: {
          borderColor: "#e2e8f0",
          strokeDashArray: 4,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          categories: this.analysis.commitFrequency.map((item) =>
            formatDateLabel(item.date)
          ),
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: {
            formatter: (value) => `${Math.round(value)}`,
          },
        },
        tooltip: {
          theme: "light",
        },
      };
    },
    commitChartSeries() {
      return [
        {
          name: "Commits",
          data: this.analysis.commitFrequency.map((item) => item.count),
        },
      ];
    },
    languageChartOptions() {
      return {
        chart: {
          foreColor: "#475569",
        },
        labels: this.analysis.languages.map((item) => item.name),
        colors: this.analysis.languages.map((item) => item.color),
        legend: {
          position: "bottom",
          fontSize: "14px",
        },
        stroke: {
          colors: ["#ffffff"],
        },
        dataLabels: {
          enabled: true,
          formatter: (value) => `${value.toFixed(1)}%`,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "68%",
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "LOC",
                  formatter: () =>
                    this.formatNumber(this.analysis.summary.totalLines),
                },
              },
            },
          },
        },
      };
    },
    languageChartSeries() {
      return this.analysis.languages.map((item) => item.percentage);
    },
    linesChartOptions() {
      return {
        chart: {
          toolbar: { show: false },
          foreColor: "#475569",
        },
        colors: this.analysis.languages.map((item) => item.color),
        plotOptions: {
          bar: {
            borderRadius: 6,
            distributed: true,
            columnWidth: "48%",
          },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: {
          categories: this.analysis.languages.map((item) => item.name),
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: {
            formatter: (value) => this.formatNumber(value),
          },
        },
        grid: {
          borderColor: "#e2e8f0",
          strokeDashArray: 4,
        },
      };
    },
    linesChartSeries() {
      return [
        {
          name: "Lines",
          data: this.analysis.languages.map((item) => item.lines),
        },
      ];
    },
  },
  async mounted() {
    const { data, source } = await fetchRepositoryAnalysis();
    this.analysis = data;
    this.source = source;
    this.loading = false;
    this.chartReady = true;
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat("en-US").format(value || 0);
    },
    initials(name) {
      return (name || "")
        .split(/[\s\-_/.-]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("");
    },
  },
};
</script>

<style scoped>
.analytics-page {
  min-height: 100%;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 34%),
    radial-gradient(circle at top right, rgba(13, 148, 136, 0.12), transparent 28%),
    linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
}

.hero-panel {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 58%, #0f766e 100%);
  color: #fff;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.18);
}

.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.7);
}

.hero-title {
  margin-top: 12px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 800;
}

.hero-copy {
  max-width: 640px;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

.hero-meta {
  display: grid;
  gap: 12px;
  min-width: 220px;
}

.meta-chip {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

.meta-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.7);
}

.meta-value {
  font-size: 15px;
  font-weight: 700;
}

.metric-card,
.panel-card {
  border-radius: 22px !important;
  border-color: rgba(148, 163, 184, 0.2) !important;
  background: rgba(255, 255, 255, 0.84) !important;
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
}

.metric-card {
  padding: 24px;
}

.metric-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.metric-label,
.panel-kicker {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #64748b;
}

.metric-value {
  margin-top: 10px;
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
}

.metric-note,
.panel-caption,
.contributor-meta {
  color: #64748b;
  font-size: 13px;
}

.metric-note {
  margin-top: 16px;
}

.panel-card {
  padding: 24px;
}

.panel-fill {
  height: 100%;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
}

.panel-title {
  margin-top: 8px;
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}

.contributors {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.contributor-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid #e2e8f0;
}

.contributor-row:last-child {
  border-bottom: 0;
}

.avatar-text {
  color: #1d4ed8;
  font-size: 13px;
  font-weight: 800;
}

.contributor-name {
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
}

.contributor-commit {
  color: #0f172a;
  font-size: 18px;
  font-weight: 800;
}

.stats-table th {
  color: #64748b !important;
  font-size: 12px !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.language-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  display: inline-block;
}

@media (max-width: 960px) {
  .hero-panel {
    flex-direction: column;
  }

  .hero-title {
    font-size: 30px;
  }
}
</style>
