const FALLBACK_ANALYSIS = {
  repository: {
    owner: "AGDholo",
    name: "shock",
    branch: "default",
    updatedAt: "2026-04-28T00:00:00Z",
  },
  summary: {
    totalLines: 6842,
    totalCommits: 318,
    totalContributors: 6,
    dominantLanguage: "Vue",
  },
  languages: [
    { name: "Vue", lines: 3310, percentage: 48.4, color: "#0d9488" },
    { name: "JavaScript", lines: 2148, percentage: 31.4, color: "#f59e0b" },
    { name: "SCSS", lines: 1014, percentage: 14.8, color: "#ec4899" },
    { name: "HTML", lines: 370, percentage: 5.4, color: "#6366f1" },
  ],
  contributors: [
    {
      name: "AGDholo",
      commits: 146,
      additions: 5220,
      deletions: 1612,
      avatar: "",
    },
    {
      name: "HeroUI",
      commits: 77,
      additions: 2384,
      deletions: 894,
      avatar: "",
    },
    {
      name: "open-cache-bot",
      commits: 41,
      additions: 962,
      deletions: 305,
      avatar: "",
    },
    {
      name: "frontend-team",
      commits: 29,
      additions: 704,
      deletions: 214,
      avatar: "",
    },
    {
      name: "ui-maintainer",
      commits: 25,
      additions: 552,
      deletions: 196,
      avatar: "",
    },
  ],
  commitFrequency: [
    { date: "2026-03-30", count: 4 },
    { date: "2026-04-01", count: 7 },
    { date: "2026-04-03", count: 12 },
    { date: "2026-04-05", count: 9 },
    { date: "2026-04-07", count: 14 },
    { date: "2026-04-09", count: 5 },
    { date: "2026-04-11", count: 16 },
    { date: "2026-04-13", count: 11 },
    { date: "2026-04-15", count: 6 },
    { date: "2026-04-17", count: 10 },
    { date: "2026-04-19", count: 13 },
    { date: "2026-04-21", count: 8 },
    { date: "2026-04-23", count: 15 },
    { date: "2026-04-25", count: 9 },
    { date: "2026-04-27", count: 12 },
  ],
};

const LANGUAGE_COLORS = ["#0d9488", "#f59e0b", "#ec4899", "#6366f1", "#22c55e"];

function numberOrZero(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatDateLabel(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("zh-CN", {
    month: "short",
    day: "numeric",
  });
}

function withLanguagePercentages(languages) {
  const totalLines = languages.reduce((sum, item) => sum + numberOrZero(item.lines), 0);

  return languages.map((item, index) => ({
    name: item.name || item.language || `Language ${index + 1}`,
    lines: numberOrZero(item.lines),
    percentage: totalLines
      ? Number(((numberOrZero(item.lines) / totalLines) * 100).toFixed(1))
      : 0,
    color: item.color || LANGUAGE_COLORS[index % LANGUAGE_COLORS.length],
  }));
}

function normalizeContributors(contributors) {
  return (contributors || [])
    .map((item) => ({
      name: item.name || item.login || "Unknown",
      commits: numberOrZero(item.commits),
      additions: numberOrZero(item.additions),
      deletions: numberOrZero(item.deletions),
      avatar: item.avatar || item.avatarUrl || "",
    }))
    .sort((left, right) => right.commits - left.commits)
    .slice(0, 5);
}

function normalizeCommitFrequency(points) {
  return (points || [])
    .map((item) => ({
      date: item.date || item.day || item.label || "",
      count: numberOrZero(item.count || item.commits),
    }))
    .filter((item) => item.date)
    .sort((left, right) => new Date(left.date) - new Date(right.date));
}

function normalizeAnalysis(payload) {
  const repository = payload.repository || payload.repo || {};
  const rawLanguages = payload.languages || payload.codeStats?.languages || [];
  const languages = withLanguagePercentages(rawLanguages);
  const contributors = normalizeContributors(
    payload.contributors || payload.topContributors || []
  );
  const commitFrequency = normalizeCommitFrequency(
    payload.commitFrequency || payload.commitActivity || payload.commitsOverTime || []
  );
  const totalLines =
    numberOrZero(payload.summary?.totalLines) ||
    languages.reduce((sum, item) => sum + item.lines, 0);
  const totalCommits =
    numberOrZero(payload.summary?.totalCommits) ||
    contributors.reduce((sum, item) => sum + item.commits, 0) ||
    commitFrequency.reduce((sum, item) => sum + item.count, 0);
  const totalContributors =
    numberOrZero(payload.summary?.totalContributors) || contributors.length;

  return {
    repository: {
      owner: repository.owner || repository.ownerName || "Backend",
      name: repository.name || repository.repoName || "Repository",
      branch: repository.branch || repository.defaultBranch || "default",
      updatedAt: repository.updatedAt || payload.generatedAt || new Date().toISOString(),
    },
    summary: {
      totalLines,
      totalCommits,
      totalContributors,
      dominantLanguage: languages[0]?.name || "N/A",
    },
    languages,
    contributors,
    commitFrequency,
  };
}

export async function fetchRepositoryAnalysis() {
  try {
    const response = await fetch("/api/repository/analysis", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    return {
      data: normalizeAnalysis(payload),
      source: "api",
    };
  } catch (error) {
    return {
      data: normalizeAnalysis(FALLBACK_ANALYSIS),
      source: "fallback",
      error,
    };
  }
}

export { formatDateLabel };
