const titles = {
  overview: "工作台首页",
  project: "项目管理",
  activity: "营销活动",
  knowledge: "知识库",
  content: "内容创作",
  campaign: "广告计划执行",
  report: "数据中心",
  workflow: "风控监测",
  team: "权限管理",
  release: "版本发布",
};

const heroCopy = {
  overview: {
    title: "把每日运营动作串成一条可追踪链路",
    description: "集中查看业绩、单量、广告触达、社群内容、待办事项和项目进度，快速判断今天要优先处理什么。",
  },
  knowledge: {
    title: "沉淀产品、公司、SOP 与素材的统一口径",
    description: "把产品卖点、合规话术、操作流程和高效素材统一管理，为内容创作、数据复盘和广告执行提供稳定依据。",
  },
  project: {
    title: "把所有运营项目纳入统一目标、资源和进度管理",
    description: "围绕短线王、新开升级、选股王、中高端续费、猎手活动、基金、转介绍和加企微活动统一看目标、动作和风险。",
  },
  activity: {
    title: "把营销活动从策划、排期、上线到复盘串起来",
    description: "统一管理活动主题、项目归属、资源位、素材、触达人群和执行状态，减少活动信息散落和口径不一致。",
  },
  content: {
    title: "从热点追踪到社群文案的一站式创作台",
    description: "围绕行情热点、产品知识和公司口径生成可复制内容，支持早报、话题、活动承接和盘后播报等运营场景。",
  },
  campaign: {
    title: "把广告计划、校验、执行和记录放在同一条链路",
    description: "按项目管理投放任务、素材替换、执行状态和异常提醒，先校验再执行，减少错配和重复铺设。",
  },
  report: {
    title: "用日报、周报、月报串联结果复盘和优化建议",
    description: "汇总核心指标、转化漏斗、渠道表现、问题素材和社群承接效果，辅助判断下一步优化方向。",
  },
  workflow: {
    title: "提前识别内容、投放、数据和权限风险",
    description: "围绕合规话术、广告执行、数据异常和账号权限建立监测清单，让风险事项可以被发现、处理和追踪。",
  },
  team: {
    title: "按角色管理权限、职责和协作边界",
    description: "清晰区分查看、编辑、审批和执行权限，方便团队协作时既能提效，也能保留关键操作留痕。",
  },
  release: {
    title: "每次更新先留痕，再由你确认是否对外展示",
    description: "集中记录平台版本变化、长期链接状态和发布确认动作，避免本地改动未经同意就同步给外部人员。",
  },
};

const workflowCopy = {
  overview: [
    ["看总览", "业绩、单量、触达和内容先统一扫一遍"],
    ["找异常", "定位下滑项目、低效素材和未完成待办"],
    ["排优先级", "按影响面和时效判断今天先处理什么"],
    ["分配动作", "把内容、广告、数据和风控事项拆给对应模块"],
    ["复盘闭环", "同步结果，沉淀到日报和项目趋势"],
  ],
  knowledge: [
    ["收集资料", "产品权益、公司资质、SOP、素材统一归集"],
    ["清洗口径", "去重、校验链接、补充合规边界"],
    ["打标签", "按项目、场景、渠道和适用人群分类"],
    ["供给调用", "给内容创作、日报复盘和广告执行引用"],
    ["定期复核", "过期活动、旧素材和失效话术及时更新"],
  ],
  project: [
    ["建项目", "明确项目归属、目标、人群和负责人"],
    ["拆目标", "把业绩、单量、触达和内容拆到执行指标"],
    ["配资源", "匹配广告位、社群、知识库和数据复盘资源"],
    ["盯进度", "跟踪今日动作、风险事项和待办完成情况"],
    ["做复盘", "沉淀有效动作、问题原因和下轮优化计划"],
  ],
  activity: [
    ["定主题", "确认活动目标、利益点、适用项目和合规边界"],
    ["排资源", "安排广告位、社群触达、企微承接和素材节奏"],
    ["备素材", "准备图片、文案、链接、话术和检查项"],
    ["上线执行", "按排期发布并跟踪曝光、点击、订单和成交"],
    ["复盘优化", "总结高效素材、低效环节和下一轮动作"],
  ],
  content: [
    ["追热点", "盘前、盘中、盘后收集行情和消息线索"],
    ["匹配项目", "结合知识库选择适合承接的产品或活动"],
    ["生成草稿", "输出早报、话题、活动提醒和盘后播报"],
    ["合规检查", "过滤收益承诺、买卖指令和不完整风险提示"],
    ["复用沉淀", "高转发内容回写素材和知识库"],
  ],
  campaign: [
    ["定计划", "确认项目、资源位、日期和投放动作"],
    ["校素材", "检查图片、链接、人群、排期冲突"],
    ["先入队", "任务保存到队列，保留备注和排除项"],
    ["再执行", "按复制、换图、只复制等动作模拟执行"],
    ["留记录", "沉淀运行结果、问题素材和复用模板"],
  ],
  report: [
    ["选口径", "按项目、日期、对比日和渠道筛选数据"],
    ["看指标", "广告数、弹出、点击、订单、成交和转化率"],
    ["拆问题", "按渠道、人群和素材定位异常来源"],
    ["出建议", "形成优化动作和可复制日报摘要"],
    ["追结果", "次日对比验证优化是否有效"],
  ],
  workflow: [
    ["建规则", "定义内容、广告、数据和权限风险项"],
    ["跑监测", "按阈值、状态和合规词持续扫描"],
    ["分级处理", "按红橙蓝绿判断紧急程度"],
    ["指派责任", "把风险项分配到对应处理人和模块"],
    ["归档复盘", "记录原因、处理动作和后续防重复方案"],
  ],
  team: [
    ["定角色", "按运营、内容、投放、数据、管理员划分职责"],
    ["配权限", "设置查看、编辑、审批和执行范围"],
    ["控关键动作", "高风险操作保留人工确认和留痕"],
    ["同步成员", "成员变更后及时更新权限状态"],
    ["审计复盘", "定期检查越权、离职账号和异常操作"],
  ],
  release: [
    ["记录更新", "把本地新增、调整和修复写入版本记录"],
    ["本地确认", "先在本机预览并检查页面是否正常"],
    ["等待同意", "你点击同意后，才进入对外发布流程"],
    ["同步外链", "确认发布后更新长期链接给外部人员查看"],
    ["归档留痕", "记录发布时间、内容和当前展示状态"],
  ],
};

const navButtons = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const pageTitle = document.querySelector("#pageTitle");
const heroTitle = document.querySelector("#heroTitle");
const heroDescription = document.querySelector("#heroDescription");
const workflowTitle = document.querySelector("#workflowTitle");
const workflowSteps = document.querySelector("#workflowSteps");
const reportPeriodButtons = document.querySelectorAll("[data-report-period]");
const contentTypeButtons = document.querySelectorAll("[data-content-tab]");
const localOnlyElements = document.querySelectorAll("[data-local-only]");
const ACTIVE_VIEW_STORAGE_KEY = "operation-center-active-view";
const ACTIVE_REPORT_PERIOD_KEY = "operation-center-report-period";
const ACTIVE_CONTENT_TYPE_KEY = "operation-center-content-type";
const reportPeriodCopy = {
  daily: {
    title: "日报数据：当天投放结果与复盘动作",
    description: "按日汇总广告触达、点击转化、成交结果和问题素材，快速判断今日表现并生成次日优化动作。",
  },
  weekly: {
    title: "周报数据：7天趋势与项目推进质量",
    description: "按周对比广告触达、成交转化、渠道贡献和素材表现，沉淀本周问题与下周优化重点。",
  },
  monthly: {
    title: "月报数据：月度目标、资源投入和增长结构",
    description: "按月汇总项目目标完成度、渠道贡献、活动效果和关键风险，为下一阶段资源分配提供依据。",
  },
  yearly: {
    title: "年报数据：年度累计、项目结构和长期沉淀",
    description: "按年汇总广告触达、转化成交、项目贡献和素材沉淀，为年度复盘和下一年度规划提供依据。",
  },
};
const analysisAdTypes = {
  normal: { label: "普通广告", channel: "APP", bannerType: 1 },
  appPopup: { label: "APP弹窗广告", channel: "APP", bannerType: 2 },
  appNotice: { label: "APP通知栏推送", channel: "APP", bannerType: 3 },
  pcPopup: { label: "PC弹窗推送", channel: "PC", bannerType: 4 },
};
const analysisAppScopes = {
  ALL: { label: "全部", backendLabel: "PC+APP", channels: ["APP", "PC"] },
  PC: { label: "PC", backendLabel: "股票软件+多赢WEB网站", channels: ["PC"] },
  APP: { label: "APP", backendLabel: "经传多赢股票", channels: ["APP"] },
};
const contentTypeCopy = {
  copy: {
    title: "文案创作：把热点、活动和产品卖点转成可直接分发的话术",
    description: "支持社群短文案、活动提醒、朋友圈表达和盘中话题，强调快产出、可复制和合规边界。",
  },
  article: {
    title: "长文创作：沉淀完整观点、复盘和产品知识内容",
    description: "适合公众号、知识库文章、产品讲解和项目复盘，围绕结构、论据、风险提示和行动引导统一生成。",
  },
  image: {
    title: "图片创作：围绕活动、产品和社群触达生成视觉素材",
    description: "管理封面图、活动海报、社群配图和广告素材需求，方便后续对接设计、审核和投放。",
  },
  video: {
    title: "视频创作：把运营主题拆成脚本、分镜和发布素材",
    description: "支持短视频脚本、口播提纲、分镜节奏和素材清单，服务活动预热、产品讲解和复盘传播。",
  },
};

function isLocalPreview() {
  const { protocol, hostname } = window.location;
  return protocol === "file:" || hostname === "127.0.0.1" || hostname === "localhost";
}

function applyLocalOnlyVisibility() {
  localOnlyElements.forEach((element) => {
    element.classList.toggle("local-only-hidden", !isLocalPreview());
  });
}

function isViewAvailable(view) {
  const targetButton = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (!targetButton) return false;
  return !targetButton.matches("[data-local-only]") || isLocalPreview();
}

function setPageCopy(view) {
  pageTitle.textContent = titles[view] || "运营工作台";
  const copy = heroCopy[view] || heroCopy.overview;
  heroTitle.textContent = copy.title;
  heroDescription.textContent = copy.description;
  if (!workflowSteps) return;
  if (workflowTitle) workflowTitle.textContent = titles[view] || "运营工作台";
  workflowSteps.innerHTML = (workflowCopy[view] || workflowCopy.overview)
    .map((step, index) => `
      <div class="workflow-step" data-index="${index + 1}">
        <strong>${step[0]}</strong>
        <span>${step[1]}</span>
      </div>
    `)
    .join("");
}

function getStoredView() {
  const storedView = localStorage.getItem(ACTIVE_VIEW_STORAGE_KEY);
  return isViewAvailable(storedView) ? storedView : "overview";
}

function getStoredReportPeriod() {
  const storedPeriod = localStorage.getItem(ACTIVE_REPORT_PERIOD_KEY);
  return reportPeriodCopy[storedPeriod] ? storedPeriod : "daily";
}

function getStoredContentType() {
  const storedType = localStorage.getItem(ACTIVE_CONTENT_TYPE_KEY);
  return contentTypeCopy[storedType] ? storedType : "copy";
}

function setReportPeriod(period, shouldPersist = true) {
  const nextPeriod = reportPeriodCopy[period] ? period : "daily";
  reportPeriodButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.reportPeriod === nextPeriod);
  });
  if (document.querySelector(".nav-item.active")?.dataset.view === "report") {
    heroTitle.textContent = reportPeriodCopy[nextPeriod].title;
    heroDescription.textContent = reportPeriodCopy[nextPeriod].description;
  }
  if (shouldPersist) localStorage.setItem(ACTIVE_REPORT_PERIOD_KEY, nextPeriod);
}

function setContentType(type, shouldPersist = true) {
  const nextType = contentTypeCopy[type] ? type : "copy";
  contentTypeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.contentTab === nextType);
  });
  switchContentTab(nextType);
  if (shouldPersist) localStorage.setItem(ACTIVE_CONTENT_TYPE_KEY, nextType);
}

function activateView(view, shouldPersist = true) {
  const nextView = isViewAvailable(view) ? view : "overview";

  document.querySelector(".app-shell")?.scrollTo({ top: 0, left: 0 });
  navButtons.forEach((item) => item.classList.toggle("active", item.dataset.view === nextView));
  views.forEach((section) => section.classList.toggle("active", section.id === `view-${nextView}`));
  setPageCopy(nextView);
  if (nextView === "content") {
    setContentType(getStoredContentType(), false);
  }
  if (nextView === "report") {
    setReportPeriod(getStoredReportPeriod(), false);
    renderDataCenter();
  }
  if (shouldPersist) localStorage.setItem(ACTIVE_VIEW_STORAGE_KEY, nextView);
}

applyLocalOnlyVisibility();

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateView(button.dataset.view);
  });
});

reportPeriodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setReportPeriod(button.dataset.reportPeriod);
    activateView("report");
  });
});

contentTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setContentType(button.dataset.contentTab);
    activateView("content");
  });
});

document.querySelectorAll(".quick-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.textContent.trim();
    const match = {
      首页总览: "overview",
      项目管理: "project",
      营销活动: "activity",
      内容创作: "content",
      数据中心: "report",
      广告执行: "campaign",
      风控监测: "workflow",
      权限管理: "team",
    }[text];

    if (!match) return;
    document.querySelector(`.nav-item[data-view="${match}"]`)?.click();
    if (match === "campaign") switchCampaignTab("execution");
  });
});

function initReleaseModule() {
  const approvalKey = "operation-director-release-approval";
  const releaseStateKey = "operation-center-release-state";
  const releaseSnapshotKey = "operation-center-release-daily-snapshots";
  const publicUrl = "https://qjz-yyzt.github.io/zz/";
  const approveButton = document.querySelector("#approveRelease");
  const resetButton = document.querySelector("#resetReleaseApproval");
  const copyButton = document.querySelector("#copyReleaseLink");
  const stateEl = document.querySelector("#releaseGateState");
  const textEl = document.querySelector("#releaseGateText");
  const timeline = document.querySelector(".release-timeline");

  function inferReleaseModule(title = "") {
    const rules = [
      ["version", ["版本发布", "版本模块", "发布包", "发布规则", "更新记录", "正式外链", "预览链接", "时间精度"]],
      ["knowledge", ["知识库", "资料", "文件", "上传", "类目", "分类"]],
      ["content", ["内容", "社群", "文案", "素材", "转发", "企微素材"]],
      ["ad", ["广告", "展示", "点击", "转化"]],
      ["data", ["日报", "周报", "月报", "报表", "数据中心"]],
      ["risk", ["风控", "异常", "预警"]],
      ["team", ["权限", "账号", "团队"]],
      ["activity", ["营销活动", "活动排期", "活动口径", "活动"]],
      ["project", ["项目", "短线王", "中高端", "猎手", "基金", "新开升级", "选股王", "转介绍", "加企微"]],
      ["overview", ["数据总览", "首页", "头部", "趋势", "单量", "业绩", "环比", "驾驶舱", "待办"]],
    ];
    return rules.find(([, keywords]) => keywords.some((keyword) => title.includes(keyword)))?.[0] || "general";
  }

  timeline?.querySelectorAll("article").forEach((item, index) => {
    const title = item.querySelector("h4")?.textContent || `release-${index + 1}`;
    const id = title.match(/v[\d.]+/)?.[0] || `release-${index + 1}`;
    const state = item.querySelector(".release-state");
    if (!item.dataset.releaseId) item.dataset.releaseId = id;
    if (!item.dataset.releaseStatus) item.dataset.releaseStatus = state?.classList.contains("ok") ? "ok" : "wait";
    if (!item.dataset.releaseModule) item.dataset.releaseModule = inferReleaseModule(title);
    if (!item.querySelector("[data-release-check]")) {
      item.insertAdjacentHTML("afterbegin", `<label class="release-select"><input type="checkbox" data-release-check value="${id}" /><span></span></label>`);
    }
  });

  const releaseItems = [...document.querySelectorAll("[data-release-id]")];
  const releaseChecks = [...document.querySelectorAll("[data-release-check]")];
  const selectedList = document.querySelector("#releaseSelectedList");
  const batchState = document.querySelector("#releaseBatchState");
  const filterButtons = [...document.querySelectorAll("[data-release-filter]")];
  const moduleFilterButtons = [...document.querySelectorAll("[data-release-module-filter]")];
  const toggleAllCheckbox = document.querySelector("#toggleAllRelease");
  const selectPendingButton = document.querySelector("#selectPendingRelease");
  const publishButton = document.querySelector("#publishSelectedRelease");
  const rollbackButton = document.querySelector("#rollbackRelease");
  const versionTotalEl = document.querySelector("#releaseVersionTotal");
  const versionWaitEl = document.querySelector("#releaseVersionWait");
  const versionOkEl = document.querySelector("#releaseVersionOk");
  const versionLatestEl = document.querySelector("#releaseVersionLatest");
  const versionLatestDescEl = document.querySelector("#releaseVersionLatestDesc");
  const dailyReportEl = document.querySelector("#releaseDailyReport");
  const weeklyReportEl = document.querySelector("#releaseWeeklyReport");
  const monthlyReportEl = document.querySelector("#releaseMonthlyReport");
  const yearlyReportEl = document.querySelector("#releaseYearlyReport");
  let activeReleaseFilter = "all";
  let activeReleaseModuleFilter = "all";

  if (!approveButton || !stateEl || !textEl) return;

  function formatTime(value) {
    if (!value) return "";
    return new Intl.DateTimeFormat("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  }

  function readReleaseState() {
    try {
      const stored = JSON.parse(localStorage.getItem(releaseStateKey) || "{}");
      return {
        statuses: stored.statuses || {},
        lastPublished: Array.isArray(stored.lastPublished) ? stored.lastPublished : [],
        publishedAt: stored.publishedAt || "",
      };
    } catch {
      return { statuses: {}, lastPublished: [], publishedAt: "" };
    }
  }

  function writeReleaseState(state) {
    localStorage.setItem(releaseStateKey, JSON.stringify(state));
  }

  function dateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function readReleaseSnapshots() {
    try {
      const stored = JSON.parse(localStorage.getItem(releaseSnapshotKey) || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  }

  function writeReleaseSnapshots(snapshots) {
    localStorage.setItem(releaseSnapshotKey, JSON.stringify(snapshots.slice(-370)));
  }

  function getReleaseInfo(item) {
    return {
      id: item.dataset.releaseId,
      title: item.querySelector("h4")?.textContent || "",
      desc: item.querySelector("p")?.textContent || "",
    };
  }

  function setItemStatus(item, status) {
    const state = item.querySelector(".release-state");
    if (!state) return;
    item.dataset.releaseCurrentStatus = status;
    item.classList.toggle("released", status === "ok");
    item.classList.toggle("rolled-back", status === "rollback");
    state.classList.toggle("ok", status === "ok");
    state.classList.toggle("wait", status !== "ok");
    state.textContent = status === "ok" ? "已发布" : status === "rollback" ? "已撤回" : "准备发布";
  }

  function applyReleaseFilter() {
    releaseItems.forEach((item) => {
      const status = item.dataset.releaseCurrentStatus || item.dataset.releaseStatus || "wait";
      const module = item.dataset.releaseModule || "general";
      const visibleByStatus = activeReleaseFilter === "all" || status === activeReleaseFilter;
      const visibleByModule = activeReleaseModuleFilter === "all" || module === activeReleaseModuleFilter;
      const visible = visibleByStatus && visibleByModule;
      item.hidden = !visible;
      if (!visible) {
        const check = item.querySelector("[data-release-check]");
        if (check) {
          check.checked = false;
          item.classList.remove("selected");
        }
      }
    });
    filterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.releaseFilter === activeReleaseFilter);
    });
    moduleFilterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.releaseModuleFilter === activeReleaseModuleFilter);
    });
  }

  function renderVersionModuleData() {
    const versionItems = releaseItems.filter((item) => item.dataset.releaseModule === "version");
    const waitCount = versionItems.filter((item) => (item.dataset.releaseCurrentStatus || item.dataset.releaseStatus || "wait") !== "ok").length;
    const okCount = versionItems.filter((item) => (item.dataset.releaseCurrentStatus || item.dataset.releaseStatus || "wait") === "ok").length;
    const latest = versionItems[0];
    const snapshot = recordReleaseSnapshot(versionItems, waitCount, okCount, latest);
    if (versionTotalEl) versionTotalEl.textContent = String(versionItems.length);
    if (versionWaitEl) versionWaitEl.textContent = String(waitCount);
    if (versionOkEl) versionOkEl.textContent = String(okCount);
    if (versionLatestEl) versionLatestEl.textContent = latest?.dataset.releaseId || "-";
    if (versionLatestDescEl) versionLatestDescEl.textContent = latest?.querySelector("h4")?.textContent || "等待版本模块更新";
    renderReleaseReports(snapshot);
  }

  function recordReleaseSnapshot(versionItems, waitCount, okCount, latest) {
    const today = dateKey();
    const snapshot = {
      date: today,
      total: versionItems.length,
      wait: waitCount,
      ok: okCount,
      latestId: latest?.dataset.releaseId || "-",
      latestTitle: latest?.querySelector("h4")?.textContent || "等待版本模块更新",
      updatedAt: new Date().toISOString(),
    };
    const snapshots = readReleaseSnapshots().filter((item) => item.date !== today);
    snapshots.push(snapshot);
    writeReleaseSnapshots(snapshots);
    return snapshot;
  }

  function renderReleaseReports(todaySnapshot) {
    const snapshots = readReleaseSnapshots();
    const today = todaySnapshot || snapshots[snapshots.length - 1];
    const now = new Date();
    const currentYear = String(now.getFullYear());
    const currentMonth = `${currentYear}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    weekStart.setHours(0, 0, 0, 0);
    const weekItems = snapshots.filter((item) => new Date(`${item.date}T00:00:00`) >= weekStart);
    const monthItems = snapshots.filter((item) => item.date.startsWith(currentMonth));
    const yearItems = snapshots.filter((item) => item.date.startsWith(currentYear));
    const latestOf = (items) => items[items.length - 1] || today || { total: 0, wait: 0, ok: 0, latestId: "-" };
    const weekly = latestOf(weekItems);
    const monthly = latestOf(monthItems);
    const yearly = latestOf(yearItems);
    if (dailyReportEl) dailyReportEl.textContent = `${today?.date || dateKey()}：${today?.total || 0}条，待发布${today?.wait || 0}条`;
    if (weeklyReportEl) weeklyReportEl.textContent = `本周${weekItems.length || 1}天快照，最新待发布${weekly.wait || 0}条`;
    if (monthlyReportEl) monthlyReportEl.textContent = `本月${monthItems.length || 1}天快照，最新已发布${monthly.ok || 0}条`;
    if (yearlyReportEl) yearlyReportEl.textContent = `本年${yearItems.length || 1}天快照，最新版本${yearly.latestId || "-"}`;
  }

  function selectedReleaseIds() {
    return releaseChecks.filter((check) => check.checked).map((check) => check.value);
  }

  function visibleReleaseChecks() {
    return releaseChecks.filter((check) => !check.closest("article")?.hidden);
  }

  function syncToggleAllCheckbox() {
    if (!toggleAllCheckbox) return;
    const visibleChecks = visibleReleaseChecks();
    const selectedCount = visibleChecks.filter((check) => check.checked).length;
    toggleAllCheckbox.checked = visibleChecks.length > 0 && selectedCount === visibleChecks.length;
    toggleAllCheckbox.indeterminate = selectedCount > 0 && selectedCount < visibleChecks.length;
  }

  function renderSelectedList(ids, fallbackIds = []) {
    const activeIds = ids.length ? ids : fallbackIds;
    const selected = releaseItems.filter((item) => activeIds.includes(item.dataset.releaseId)).map(getReleaseInfo);
    if (!selectedList || !batchState) return;
    batchState.textContent = ids.length ? `已选择 ${selected.length} 项` : selected.length ? `最近发布 ${selected.length} 项` : "未选择";
    selectedList.innerHTML = selected.length
      ? selected.map((item, index) => `
          <div><span class="status-dot ${index % 3 === 0 ? "blue" : index % 3 === 1 ? "green" : "orange"}"></span><strong>${item.title}</strong><p>${item.desc}</p></div>
        `).join("")
      : `<div><span class="status-dot blue"></span><strong>未选择发布版本</strong><p>请在下方更新记录中勾选需要同步到对外正式环境的版本。</p></div>`;
  }

  function renderReleaseState() {
    const approvedAt = localStorage.getItem(approvalKey);
    const releaseState = readReleaseState();
    const isApproved = Boolean(approvedAt);
    stateEl.textContent = isApproved ? "已记录" : "待记录";
    stateEl.classList.add("ok");
    stateEl.classList.remove("wait");
    approveButton.textContent = isApproved ? "已记录本次发布" : "记录本次发布";
    approveButton.disabled = isApproved;
    textEl.textContent = releaseState.publishedAt
      ? `最近发布包已在 ${formatTime(releaseState.publishedAt)} 本机标记完成。对外正式环境需要同步部署后才可见。`
      : isApproved
        ? `你已在 ${formatTime(approvedAt)} 完成本机记录。外部正式链接仍不会自动更新，需要在下方勾选版本后点击“发布选中”。`
        : "记录仅代表本机已留痕，外部正式链接不会自动展示；需要在下方勾选版本后发布。";
    releaseItems.forEach((item) => setItemStatus(item, releaseState.statuses[item.dataset.releaseId] || item.dataset.releaseStatus || "wait"));
    releaseChecks.forEach((check) => {
      check.closest("article")?.classList.toggle("selected", check.checked);
    });
    applyReleaseFilter();
    renderVersionModuleData();
    renderSelectedList(selectedReleaseIds(), releaseState.lastPublished);
    syncToggleAllCheckbox();
  }

  approveButton.addEventListener("click", () => {
    localStorage.setItem(approvalKey, new Date().toISOString());
    renderReleaseState();
  });

  resetButton?.addEventListener("click", () => {
    localStorage.removeItem(approvalKey);
    renderReleaseState();
  });

  releaseChecks.forEach((check) => {
    check.addEventListener("change", () => renderReleaseState());
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeReleaseFilter = button.dataset.releaseFilter || "all";
      renderReleaseState();
    });
  });

  moduleFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeReleaseModuleFilter = button.dataset.releaseModuleFilter || "all";
      renderReleaseState();
    });
  });

  toggleAllCheckbox?.addEventListener("change", () => {
    const shouldSelect = toggleAllCheckbox.checked;
    visibleReleaseChecks().forEach((check) => {
      check.checked = shouldSelect;
    });
    renderReleaseState();
  });

  selectPendingButton?.addEventListener("click", () => {
    const releaseState = readReleaseState();
    releaseChecks.forEach((check) => {
      check.checked = (releaseState.statuses[check.value] || "wait") === "wait";
    });
    renderReleaseState();
  });

  publishButton?.addEventListener("click", () => {
    const ids = selectedReleaseIds();
    if (!ids.length) {
      renderSelectedList([]);
      return;
    }
    const releaseState = readReleaseState();
    ids.forEach((id) => {
      releaseState.statuses[id] = "ok";
    });
    releaseState.lastPublished = ids;
    releaseState.publishedAt = new Date().toISOString();
    writeReleaseState(releaseState);
    releaseChecks.forEach((check) => {
      check.checked = false;
    });
    textEl.textContent = `已在本机标记 ${ids.length} 个版本进入对外发布包。正式同步外链前仍需执行发布流程。`;
    renderReleaseState();
  });

  rollbackButton?.addEventListener("click", () => {
    const releaseState = readReleaseState();
    const ids = releaseState.lastPublished || [];
    if (!ids.length) {
      textEl.textContent = "当前没有可撤回的最近发布包。";
      return;
    }
    ids.forEach((id) => {
      releaseState.statuses[id] = "rollback";
    });
    releaseState.lastPublished = [];
    releaseState.publishedAt = "";
    writeReleaseState(releaseState);
    textEl.textContent = `已在本机撤回 ${ids.length} 个版本，状态回滚为已撤回。`;
    renderReleaseState();
  });

  copyButton?.addEventListener("click", async () => {
    try {
      await navigator.clipboard?.writeText(publicUrl);
      copyButton.textContent = "已复制";
      window.setTimeout(() => {
        copyButton.textContent = "复制外链";
      }, 1400);
    } catch (error) {
      copyButton.textContent = "复制失败";
      window.setTimeout(() => {
        copyButton.textContent = "复制外链";
      }, 1400);
    }
  });

  renderReleaseState();
}

initReleaseModule();

function switchCampaignTab(tabName = "schedule") {
  document.querySelectorAll("[data-campaign-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.campaignTab === tabName);
  });
  document.querySelectorAll("[data-campaign-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.campaignPanel === tabName);
  });
}

document.querySelectorAll("[data-campaign-tab]").forEach((button) => {
  button.addEventListener("click", () => switchCampaignTab(button.dataset.campaignTab));
});

function switchContentTab(tabName = "copy") {
  document.querySelectorAll("[data-content-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.contentTab === tabName);
  });
  document.querySelectorAll("[data-content-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.contentPanel === tabName);
  });
}

document.querySelectorAll("[data-content-tab]").forEach((button) => {
  button.addEventListener("click", () => switchContentTab(button.dataset.contentTab));
});

function knowledgeFeedback(action, detail = "") {
  const status = document.getElementById("knowledgeStatus");
  if (!status) {
    const shouldToast = /失败|请选择|请输入|暂无|没有找到|不能为空|不支持|错误/.test(`${action}${detail}`);
    if (!shouldToast) return;
    const toast = document.createElement("div");
    toast.className = "kb-toast";
    toast.innerHTML = `<strong>${safeText(action)}</strong><span>${safeText(detail)}</span>`;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.classList.add("show"), 20);
    window.setTimeout(() => {
      toast.classList.remove("show");
      window.setTimeout(() => toast.remove(), 240);
    }, 2600);
    return;
  }
  status.innerHTML = `<strong>${safeText(action)}</strong><span>${safeText(detail)}</span>`;
}

function setKnowledgeActive(items, target) {
  items.forEach((item) => item.classList.toggle("active", item === target));
}

function initKnowledgeModule() {
  const center = document.querySelector(".knowledge-center");
  if (!center) return;
  const tableBody = document.getElementById("knowledgeFileTable");
  const sectionTabs = [...center.querySelectorAll("[data-knowledge-tab]")];
  const sectionPanels = [...center.querySelectorAll("[data-knowledge-panel]")];
  const categoryTabs = [...center.querySelectorAll("[data-kb-category]")];
  const subcategoryTabs = [...center.querySelectorAll("[data-kb-subcategory]")];
  const manageCategoryTabs = [...center.querySelectorAll("[data-kb-manage-category]")];
  const manageSubcategoryTabs = [...center.querySelectorAll("[data-kb-manage-subcategory]")];
  const statusFilter = document.getElementById("knowledgeStatusFilter");
  const formatFilter = document.getElementById("knowledgeFormatFilter");
  const searchInput = document.getElementById("knowledgeSearchInput");
  const batchAction = document.getElementById("knowledgeBatchAction");
  const selectAll = document.getElementById("knowledgeSelectAll");
  const totalCount = document.getElementById("knowledgeTotalCount");
  const fileInput = document.getElementById("knowledgeFileInput");
  const uploadModal = document.getElementById("knowledgeUploadModal");
  const uploadCategorySelect = document.getElementById("knowledgeUploadCategory");
  const uploadSubcategorySelect = document.getElementById("knowledgeUploadSubcategory");
  const uploadDescriptionInput = document.getElementById("knowledgeUploadDescription");
  const chooseFilesButton = document.getElementById("knowledgeChooseFiles");
  const editFileModal = document.getElementById("knowledgeEditFileModal");
  const editFileNameInput = document.getElementById("knowledgeEditFileName");
  const editCategorySelect = document.getElementById("knowledgeEditFileCategory");
  const editSubcategorySelect = document.getElementById("knowledgeEditFileSubcategory");
  const editDescriptionInput = document.getElementById("knowledgeEditFileDescription");
  const saveFileNameButton = document.getElementById("knowledgeSaveFileName");
  if (!tableBody) return;

  const KB_FILES_KEY = "operation-center-knowledge-files";
  const KB_LABELS_KEY = "operation-center-knowledge-labels";
  const KB_DB_NAME = "operation-center-knowledge-db";
  const KB_DB_STORE = "fileBlobs";
  let knowledgeDb = null;

  const categoryLabel = {
    all: "全部",
    company: "公司知识库",
    product: "产品知识库",
    activity: "活动知识库",
    material: "素材知识库",
  };
  const subcategoryLabel = {
    all: "全部",
    "company-license": "公司资质",
    brand: "品牌介绍",
    duanxianwang: "短线王",
    xuanguguang: "选股王",
    zhuli: "主力版",
    jigou: "机构版",
    zhizun: "智尊版",
    renewal: "续费活动",
    community: "社群素材",
  };
  const defaultCategoryOrder = ["all", "company", "product", "activity", "material"];
  const defaultSubcategoryOrder = ["all", "company-license", "brand", "duanxianwang", "xuanguguang", "zhuli", "jigou", "zhizun", "renewal", "community"];
  let categoryOrder = [...defaultCategoryOrder];
  let subcategoryOrder = [...defaultSubcategoryOrder];
  let activeCategory = "all";
  let activeSubcategory = "all";
  let activeStatus = "all";
  let uploadIndex = 1;
  let pendingUploadCategory = "product";
  let pendingUploadSubcategory = "duanxianwang";
  let editingFileRow = null;

  function rows() {
    return [...tableBody.querySelectorAll("tr")];
  }

  function visibleRows() {
    return rows().filter((row) => row.style.display !== "none");
  }

  function closeMenus(exceptMenu = null) {
    center.querySelectorAll(".kb-menu.open").forEach((menu) => {
      if (menu !== exceptMenu) menu.classList.remove("open");
    });
  }

  function renumberRows() {
    rows().forEach((row, index) => {
      const cell = row.children[1];
      if (cell) cell.textContent = String(index + 1).padStart(2, "0");
    });
  }

  function updateTabCounts() {
    const allRows = rows();
    categoryTabs.forEach((button) => {
      const category = button.dataset.kbCategory;
      const count = category === "all" ? allRows.length : allRows.filter((row) => row.dataset.category === category).length;
      button.textContent = `${categoryLabel[category] || category}(${count})`;
    });
    manageCategoryTabs.forEach((button) => {
      const category = button.dataset.kbManageCategory;
      const count = category === "all" ? allRows.length : allRows.filter((row) => row.dataset.category === category).length;
      button.textContent = `${categoryLabel[category] || category}(${count})`;
    });
    subcategoryTabs.forEach((button) => {
      const subcategory = button.dataset.kbSubcategory;
      if (subcategory === "all") {
        button.textContent = "全部";
        return;
      }
      const count = allRows.filter((row) => row.dataset.subcategory === subcategory).length;
      button.textContent = `${subcategoryLabel[subcategory] || subcategory}(${count})`;
    });
    manageSubcategoryTabs.forEach((button) => {
      const subcategory = button.dataset.kbManageSubcategory;
      if (subcategory === "all") {
        button.textContent = "全部";
        return;
      }
      const count = allRows.filter((row) => row.dataset.subcategory === subcategory).length;
      button.textContent = `${subcategoryLabel[subcategory] || subcategory}(${count})`;
    });
    if (totalCount) totalCount.textContent = String(allRows.length);
  }

  function syncSubcategoryTabs() {
    subcategoryTabs.forEach((button) => {
      const parent = button.dataset.parent;
      const shouldShow = parent === "all" || activeCategory === "all" || parent === activeCategory;
      button.hidden = !shouldShow;
    });
    const activeButton = subcategoryTabs.find((button) => button.dataset.kbSubcategory === activeSubcategory);
    if (!activeButton || activeButton.hidden) {
      activeSubcategory = "all";
      const allButton = subcategoryTabs.find((button) => button.dataset.kbSubcategory === "all");
      if (allButton) setKnowledgeActive(subcategoryTabs, allButton);
    }
    manageSubcategoryTabs.forEach((button) => {
      const parent = button.dataset.parent;
      const shouldShow = parent === "all" || activeCategory === "all" || parent === activeCategory;
      button.hidden = !shouldShow;
    });
    const activeManageButton = manageSubcategoryTabs.find((button) => button.dataset.kbManageSubcategory === activeSubcategory);
    if (!activeManageButton || activeManageButton.hidden) {
      const allManageButton = manageSubcategoryTabs.find((button) => button.dataset.kbManageSubcategory === "all");
      if (allManageButton) setKnowledgeActive(manageSubcategoryTabs, allManageButton);
    }
  }

  function switchKnowledgePanel(panelName) {
    sectionTabs.forEach((button) => button.classList.toggle("active", button.dataset.knowledgeTab === panelName));
    sectionPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.knowledgePanel === panelName));
    center.classList.toggle("kb-categories-active", panelName === "categories");
  }

  function normalizeOrder(order, defaults) {
    const clean = Array.isArray(order) ? order.filter((item) => defaults.includes(item) && item !== "all") : [];
    return ["all", ...clean, ...defaults.filter((item) => item !== "all" && !clean.includes(item))];
  }

  function sortButtonsByOrder(buttons, order, datasetKey) {
    const map = new Map(buttons.map((button) => [button.dataset[datasetKey], button]));
    order.forEach((key) => {
      const button = map.get(key);
      if (button) button.parentElement?.appendChild(button);
    });
  }

  function applyCategoryOrder() {
    categoryOrder = normalizeOrder(categoryOrder, defaultCategoryOrder);
    sortButtonsByOrder(categoryTabs, categoryOrder, "kbCategory");
    sortButtonsByOrder(manageCategoryTabs, categoryOrder, "kbManageCategory");
  }

  function applySubcategoryOrder() {
    subcategoryOrder = normalizeOrder(subcategoryOrder, defaultSubcategoryOrder);
    sortButtonsByOrder(subcategoryTabs, subcategoryOrder, "kbSubcategory");
    sortButtonsByOrder(manageSubcategoryTabs, subcategoryOrder, "kbManageSubcategory");
  }

  function saveCategoryConfig() {
    localStorage.setItem(KB_LABELS_KEY, JSON.stringify({ categoryLabel, subcategoryLabel, categoryOrder, subcategoryOrder }));
  }

  function enableDragOrdering(buttons, orderGetter, orderSetter, datasetKey, afterChange) {
    buttons.forEach((button) => {
      const key = button.dataset[datasetKey];
      button.draggable = key !== "all";
      if (key === "all") button.classList.add("fixed");
      button.addEventListener("dragstart", (event) => {
        if (key === "all") return;
        button.classList.add("dragging");
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", key);
      });
      button.addEventListener("dragend", () => button.classList.remove("dragging"));
      button.addEventListener("dragover", (event) => {
        if (key === "all") return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });
      button.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggedKey = event.dataTransfer.getData("text/plain");
        const targetKey = button.dataset[datasetKey];
        if (!draggedKey || draggedKey === "all" || targetKey === "all" || draggedKey === targetKey) return;
        const nextOrder = orderGetter().filter((item) => item !== draggedKey);
        const targetIndex = nextOrder.indexOf(targetKey);
        nextOrder.splice(targetIndex, 0, draggedKey);
        orderSetter(normalizeOrder(nextOrder, orderGetter()));
        afterChange();
      });
    });
  }

  function syncActiveCategoryButtons() {
    const categoryButton = categoryTabs.find((button) => button.dataset.kbCategory === activeCategory);
    const manageButton = manageCategoryTabs.find((button) => button.dataset.kbManageCategory === activeCategory);
    if (categoryButton) setKnowledgeActive(categoryTabs, categoryButton);
    if (manageButton) setKnowledgeActive(manageCategoryTabs, manageButton);
  }

  function syncActiveSubcategoryButtons() {
    const subcategoryButton = subcategoryTabs.find((button) => button.dataset.kbSubcategory === activeSubcategory);
    const manageButton = manageSubcategoryTabs.find((button) => button.dataset.kbManageSubcategory === activeSubcategory);
    if (subcategoryButton) setKnowledgeActive(subcategoryTabs, subcategoryButton);
    if (manageButton) setKnowledgeActive(manageSubcategoryTabs, manageButton);
  }

  function applyFilters() {
    const selectedFormat = formatFilter?.value || "all";
    const keyword = (searchInput?.value || "").trim().toLowerCase();
    syncSubcategoryTabs();
    rows().forEach((row) => {
      const matchCategory = activeCategory === "all" || row.dataset.category === activeCategory;
      const matchSubcategory = activeSubcategory === "all" || row.dataset.subcategory === activeSubcategory;
      const matchStatus = activeStatus === "all" || row.dataset.status === activeStatus;
      const matchFormat = selectedFormat === "all" || row.dataset.format === selectedFormat;
      const searchText = [
        row.dataset.fileName,
        row.dataset.description,
        row.dataset.format,
        row.dataset.status === "enabled" ? "启用" : "禁用",
        categoryLabel[row.dataset.category],
        subcategoryLabel[row.dataset.subcategory],
        row.textContent,
      ].join(" ").toLowerCase();
      const matchKeyword = !keyword || searchText.includes(keyword);
      row.style.display = matchCategory && matchSubcategory && matchStatus && matchFormat && matchKeyword ? "" : "none";
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox && row.style.display === "none") checkbox.checked = false;
    });
    if (selectAll) {
      selectAll.checked = false;
      selectAll.indeterminate = false;
    }
    updateTabCounts();
    knowledgeFeedback("筛选完成", `当前展示 ${visibleRows().length} 条知识文件。`);
  }

  function setRowStatus(row, status) {
    row.dataset.status = status;
    const button = row.querySelector(".kb-switch");
    if (!button) return;
    button.classList.toggle("on", status === "enabled");
    button.textContent = status === "enabled" ? "启用" : "禁用";
  }

  function selectedRows() {
    return visibleRows().filter((row) => row.querySelector('input[type="checkbox"]')?.checked);
  }

  function refreshSelectionState() {
    if (!selectAll) return;
    const visible = visibleRows();
    const checked = selectedRows().length;
    selectAll.checked = visible.length > 0 && checked === visible.length;
    selectAll.indeterminate = checked > 0 && checked < visible.length;
  }

  function createFileRow(file) {
    const row = document.createElement("tr");
    row.dataset.fileId = file.id || "";
    row.dataset.fileName = file.name || "";
    row.dataset.description = file.description || "";
    row.dataset.category = file.category;
    row.dataset.subcategory = file.subcategory;
    row.dataset.format = file.format;
    row.dataset.status = file.status;
    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td></td>
      <td><span class="file-icon ${safeText(file.iconClass || file.category)}">${safeText(file.icon)}</span>${safeText(file.name)}${file.description ? `<span class="kb-file-note" title="${safeText(file.description)}">${safeText(file.description)}</span>` : ""}</td>
      <td>${safeText(categoryLabel[file.category] || file.category)}</td>
      <td><em class="kb-tag">${safeText(subcategoryLabel[file.subcategory] || file.subcategory)}</em></td>
      <td>${knowledgePreviewButton()}</td>
      <td>${safeText(file.time)}</td>
      <td><button class="kb-switch${file.status === "enabled" ? " on" : ""}">${file.status === "enabled" ? "启用" : "禁用"}</button></td>
      <td>${knowledgeActionButtons()}</td>
    `;
    return row;
  }

  function knowledgeActionButtons() {
    return `
      <div class="kb-action-icons">
        <button class="kb-icon-action" data-kb-file-action="修改" aria-label="修改" title="修改">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
        </button>
        <button class="kb-icon-action" data-kb-file-action="下载" aria-label="下载" title="下载">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
        </button>
        <button class="kb-icon-action danger" data-kb-file-action="删除" aria-label="删除" title="删除">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v5"></path><path d="M14 11v5"></path></svg>
        </button>
      </div>
    `;
  }

  function knowledgePreviewButton() {
    return `
      <button class="kb-preview-action" data-kb-file-action="预览" aria-label="预览" title="预览">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      </button>
    `;
  }

  function upgradeActionCells() {
    rows().forEach((row) => {
      const previewCell = row.children[5];
      if (previewCell && !previewCell.querySelector(".kb-preview-action")) previewCell.innerHTML = knowledgePreviewButton();
      const actionCell = row.children[8];
      if (actionCell && !actionCell.querySelector(".kb-action-icons")) actionCell.innerHTML = knowledgeActionButtons();
    });
  }

  function fileIconFor(format, category) {
    if (["png", "jpg", "jpeg", "gif", "webp"].includes(format)) return "▧";
    if (["mp3", "mp4", "wav", "mov"].includes(format)) return "◍";
    if (["xlsx", "xls", "csv"].includes(format)) return "▤";
    return "▧";
  }

  function fileClassFor(format, category) {
    if (["png", "jpg", "jpeg", "gif", "webp"].includes(format)) return "image";
    if (["mp3", "mp4", "wav", "mov"].includes(format)) return "media";
    if (["xlsx", "xls", "csv"].includes(format)) return "data";
    return category || "product";
  }

  function defaultSubcategoryFor(category) {
    const map = {
      company: "company-license",
      product: "duanxianwang",
      activity: "renewal",
      material: "community",
    };
    return map[category] || "duanxianwang";
  }

  function subcategoriesForCategory(category) {
    return subcategoryOrder.filter((key) => key !== "all" && manageSubcategoryTabs.some((button) => button.dataset.kbManageSubcategory === key && button.dataset.parent === category));
  }

  function fillSelect(select, keys, labelMap) {
    if (!select) return;
    select.innerHTML = keys.map((key) => `<option value="${safeText(key)}">${safeText(labelMap[key] || key)}</option>`).join("");
  }

  function updateUploadSubcategoryOptions(selectedCategory, selectedSubcategory = "") {
    const subcategories = subcategoriesForCategory(selectedCategory);
    fillSelect(uploadSubcategorySelect, subcategories, subcategoryLabel);
    const nextSubcategory = subcategories.includes(selectedSubcategory) ? selectedSubcategory : (subcategories[0] || defaultSubcategoryFor(selectedCategory));
    if (uploadSubcategorySelect) uploadSubcategorySelect.value = nextSubcategory;
    pendingUploadSubcategory = nextSubcategory;
  }

  function updateEditSubcategoryOptions(selectedCategory, selectedSubcategory = "") {
    const subcategories = subcategoriesForCategory(selectedCategory);
    fillSelect(editSubcategorySelect, subcategories, subcategoryLabel);
    const nextSubcategory = subcategories.includes(selectedSubcategory) ? selectedSubcategory : (subcategories[0] || defaultSubcategoryFor(selectedCategory));
    if (editSubcategorySelect) editSubcategorySelect.value = nextSubcategory;
  }

  function openUploadModal() {
    pendingUploadCategory = activeCategory === "all" ? "product" : activeCategory;
    pendingUploadSubcategory = activeSubcategory === "all" ? defaultSubcategoryFor(pendingUploadCategory) : activeSubcategory;
    fillSelect(uploadCategorySelect, categoryOrder.filter((key) => key !== "all"), categoryLabel);
    if (uploadCategorySelect) uploadCategorySelect.value = pendingUploadCategory;
    updateUploadSubcategoryOptions(pendingUploadCategory, pendingUploadSubcategory);
    if (uploadDescriptionInput) uploadDescriptionInput.value = "";
    if (uploadModal) uploadModal.hidden = false;
  }

  function closeUploadModal() {
    if (uploadModal) uploadModal.hidden = true;
  }

  function openEditFileModal(row) {
    editingFileRow = row;
    const currentCategory = row.dataset.category || "product";
    const currentSubcategory = row.dataset.subcategory || defaultSubcategoryFor(currentCategory);
    fillSelect(editCategorySelect, categoryOrder.filter((key) => key !== "all"), categoryLabel);
    if (editCategorySelect) editCategorySelect.value = currentCategory;
    updateEditSubcategoryOptions(currentCategory, currentSubcategory);
    if (editFileNameInput) {
      editFileNameInput.value = row.dataset.fileName || row.children[2]?.textContent.trim() || "";
      window.setTimeout(() => editFileNameInput.focus(), 0);
    }
    if (editDescriptionInput) editDescriptionInput.value = row.dataset.description || "";
    if (editFileModal) editFileModal.hidden = false;
  }

  function closeEditFileModal() {
    editingFileRow = null;
    if (editFileModal) editFileModal.hidden = true;
  }

  function formatTime(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:00`;
  }

  function serializeRows() {
    return rows().map((row) => ({
      id: row.dataset.fileId || "",
      name: row.dataset.fileName || row.children[2]?.textContent.trim() || "",
      description: row.dataset.description || "",
      category: row.dataset.category || "product",
      subcategory: row.dataset.subcategory || defaultSubcategoryFor(row.dataset.category),
      format: row.dataset.format || "pdf",
      status: row.dataset.status || "enabled",
      icon: row.querySelector(".file-icon")?.textContent || fileIconFor(row.dataset.format, row.dataset.category),
      iconClass: row.querySelector(".file-icon")?.className.replace("file-icon", "").trim() || fileClassFor(row.dataset.format, row.dataset.category),
      time: row.children[6]?.textContent.trim() || formatTime(),
      hasBlob: Boolean(row.dataset.fileId),
    }));
  }

  function saveKnowledgeState() {
    localStorage.setItem(KB_FILES_KEY, JSON.stringify(serializeRows()));
  }

  function saveLabelState() {
    saveCategoryConfig();
  }

  function loadLabelState() {
    try {
      const saved = JSON.parse(localStorage.getItem(KB_LABELS_KEY) || "{}");
      if (saved.categoryLabel) Object.assign(categoryLabel, saved.categoryLabel);
      if (saved.subcategoryLabel) Object.assign(subcategoryLabel, saved.subcategoryLabel);
      categoryOrder = normalizeOrder(saved.categoryOrder, defaultCategoryOrder);
      subcategoryOrder = normalizeOrder(saved.subcategoryOrder, defaultSubcategoryOrder);
    } catch {
      localStorage.removeItem(KB_LABELS_KEY);
    }
  }

  function restoreRowsFromStorage() {
    const raw = localStorage.getItem(KB_FILES_KEY);
    rows().forEach((row) => {
      if (!row.dataset.fileId) row.dataset.fileId = "";
      if (!row.dataset.fileName) {
        const iconText = row.querySelector(".file-icon")?.textContent || "";
        row.dataset.fileName = row.children[2]?.textContent.replace(iconText, "").trim() || "";
      }
    });
    if (!raw) {
      saveKnowledgeState();
      return;
    }
    try {
      const savedFiles = JSON.parse(raw);
      tableBody.innerHTML = "";
      savedFiles.forEach((file) => tableBody.appendChild(createFileRow(file)));
    } catch {
      localStorage.removeItem(KB_FILES_KEY);
      saveKnowledgeState();
    }
  }

  function openKnowledgeDb() {
    if (knowledgeDb) return Promise.resolve(knowledgeDb);
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(KB_DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(KB_DB_STORE)) db.createObjectStore(KB_DB_STORE, { keyPath: "id" });
      };
      request.onsuccess = () => {
        knowledgeDb = request.result;
        resolve(knowledgeDb);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async function putStoredBlob(record) {
    const db = await openKnowledgeDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(KB_DB_STORE, "readwrite");
      tx.objectStore(KB_DB_STORE).put(record);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getStoredBlob(id) {
    const db = await openKnowledgeDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(KB_DB_STORE, "readonly");
      const request = tx.objectStore(KB_DB_STORE).get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function deleteStoredBlob(id) {
    if (!id) return;
    const db = await openKnowledgeDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(KB_DB_STORE, "readwrite");
      tx.objectStore(KB_DB_STORE).delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  }

  function renameActiveCategory() {
    if (activeCategory === "all") {
      knowledgeFeedback("请选择具体大类", "先选择公司知识库、产品知识库等具体大类，再修改名称。");
      return;
    }
    const currentName = categoryLabel[activeCategory] || activeCategory;
    const nextName = window.prompt("修改大类名称", currentName);
    const cleanName = nextName?.trim();
    if (!cleanName || cleanName === currentName) return;
    categoryLabel[activeCategory] = cleanName;
    rows().forEach((row) => {
      if (row.dataset.category === activeCategory && row.children[3]) row.children[3].textContent = cleanName;
    });
    updateTabCounts();
    saveLabelState();
    knowledgeFeedback("大类名称已修改", `${currentName} 已改为 ${cleanName}。`);
  }

  function renameActiveSubcategory() {
    if (activeSubcategory === "all") {
      knowledgeFeedback("请选择具体小类", "先选择短线王、选股王等具体小类，再修改名称。");
      return;
    }
    const currentName = subcategoryLabel[activeSubcategory] || activeSubcategory;
    const nextName = window.prompt("修改小类名称", currentName);
    const cleanName = nextName?.trim();
    if (!cleanName || cleanName === currentName) return;
    subcategoryLabel[activeSubcategory] = cleanName;
    rows().forEach((row) => {
      if (row.dataset.subcategory !== activeSubcategory) return;
      const tag = row.children[4]?.querySelector(".kb-tag");
      if (tag) tag.textContent = cleanName;
    });
    updateTabCounts();
    saveLabelState();
    knowledgeFeedback("小类名称已修改", `${currentName} 已改为 ${cleanName}。`);
  }

  sectionTabs.forEach((button) => {
    button.addEventListener("click", () => switchKnowledgePanel(button.dataset.knowledgeTab || "upload"));
  });

  enableDragOrdering(
    manageCategoryTabs,
    () => categoryOrder,
    (nextOrder) => { categoryOrder = nextOrder; },
    "kbManageCategory",
    () => {
      applyCategoryOrder();
      syncActiveCategoryButtons();
      updateTabCounts();
      saveCategoryConfig();
      knowledgeFeedback("大类顺序已调整", "全部固定第一位，其余大类会按当前顺序展示。");
    },
  );

  enableDragOrdering(
    manageSubcategoryTabs,
    () => subcategoryOrder,
    (nextOrder) => { subcategoryOrder = nextOrder; },
    "kbManageSubcategory",
    () => {
      applySubcategoryOrder();
      syncSubcategoryTabs();
      syncActiveSubcategoryButtons();
      updateTabCounts();
      saveCategoryConfig();
      knowledgeFeedback("小类顺序已调整", "全部固定第一位，其余小类会按当前顺序展示。");
    },
  );

  categoryTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.kbCategory || "all";
      activeSubcategory = "all";
      syncActiveCategoryButtons();
      activeSubcategory = "all";
      syncActiveSubcategoryButtons();
      applyFilters();
    });
  });

  subcategoryTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeSubcategory = button.dataset.kbSubcategory || "all";
      syncActiveSubcategoryButtons();
      applyFilters();
    });
  });

  manageCategoryTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.kbManageCategory || "all";
      activeSubcategory = "all";
      syncActiveCategoryButtons();
      syncActiveSubcategoryButtons();
      applyFilters();
    });
  });

  manageSubcategoryTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeSubcategory = button.dataset.kbManageSubcategory || "all";
      syncActiveSubcategoryButtons();
      applyFilters();
    });
  });

  statusFilter?.addEventListener("change", () => {
    activeStatus = statusFilter.value || "all";
    applyFilters();
  });
  searchInput?.addEventListener("input", applyFilters);
  formatFilter?.addEventListener("change", applyFilters);
  document.getElementById("knowledgeEditCategory")?.addEventListener("click", renameActiveCategory);
  document.getElementById("knowledgeEditSubcategory")?.addEventListener("click", renameActiveSubcategory);

  selectAll?.addEventListener("change", () => {
    visibleRows().forEach((row) => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.checked = selectAll.checked;
    });
    refreshSelectionState();
    knowledgeFeedback(selectAll.checked ? "已全选当前列表" : "已取消全选", `当前列表共 ${visibleRows().length} 条。`);
  });

  tableBody.addEventListener("change", (event) => {
    if (event.target.matches('input[type="checkbox"]')) refreshSelectionState();
  });

  tableBody.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;
    if (event.target.classList.contains("kb-switch")) {
      const nextStatus = row.dataset.status === "enabled" ? "disabled" : "enabled";
      setRowStatus(row, nextStatus);
      saveKnowledgeState();
      knowledgeFeedback(nextStatus === "enabled" ? "文件已启用" : "文件已禁用", row.children[2]?.textContent.trim() || "已更新文件状态。");
      if (activeStatus !== "all") applyFilters();
      return;
    }
    if (event.target.closest("[data-kb-file-action]")) {
      const action = event.target.closest("[data-kb-file-action]").dataset.kbFileAction;
      const fileNameCell = row.children[2];
      const fileName = fileNameCell?.textContent.trim() || "当前文件";
      if (action === "预览") {
        const fileId = row.dataset.fileId;
        if (!fileId) {
          knowledgeFeedback("暂无可预览源文件", "示例文件没有真实文件内容；你上传的文件可以直接预览。");
          return;
        }
        getStoredBlob(fileId).then((record) => {
          if (!record?.blob) {
            knowledgeFeedback("预览失败", "没有找到本地保存的源文件。");
            return;
          }
          const url = URL.createObjectURL(record.blob);
          window.open(url, "_blank", "noopener,noreferrer");
          window.setTimeout(() => URL.revokeObjectURL(url), 30000);
        }).catch(() => knowledgeFeedback("预览失败", "浏览器本地数据库读取失败。"));
      } else if (action === "删除") {
        const fileId = row.dataset.fileId;
        row.remove();
        deleteStoredBlob(fileId).catch(() => {});
        renumberRows();
        saveKnowledgeState();
        applyFilters();
        knowledgeFeedback("文件已删除", `${fileName} 已从知识库移除。`);
      } else if (action === "修改") {
        openEditFileModal(row);
      } else {
        const fileId = row.dataset.fileId;
        if (!fileId) {
          knowledgeFeedback("暂无可下载源文件", "示例文件没有真实文件内容；你上传的文件可以直接下载。");
          return;
        }
        getStoredBlob(fileId).then((record) => {
          if (!record?.blob) {
            knowledgeFeedback("下载失败", "没有找到本地保存的源文件。");
            return;
          }
          const url = URL.createObjectURL(record.blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = row.dataset.fileName || record.name || "知识库文件";
          document.body.appendChild(link);
          link.click();
          link.remove();
          URL.revokeObjectURL(url);
          knowledgeFeedback("已开始下载", row.dataset.fileName || record.name || fileName);
        }).catch(() => knowledgeFeedback("下载失败", "浏览器本地数据库读取失败。"));
      }
      return;
    }
    if (!event.target.closest("button") && !event.target.matches('input[type="checkbox"]')) {
      row.querySelector('input[type="checkbox"]')?.click();
    }
  });

  document.getElementById("knowledgeUpload")?.addEventListener("click", () => {
    openUploadModal();
  });

  uploadCategorySelect?.addEventListener("change", () => {
    pendingUploadCategory = uploadCategorySelect.value || "product";
    updateUploadSubcategoryOptions(pendingUploadCategory);
  });

  uploadSubcategorySelect?.addEventListener("change", () => {
    pendingUploadSubcategory = uploadSubcategorySelect.value || defaultSubcategoryFor(pendingUploadCategory);
  });

  editCategorySelect?.addEventListener("change", () => {
    updateEditSubcategoryOptions(editCategorySelect.value || "product");
  });

  chooseFilesButton?.addEventListener("click", () => {
    pendingUploadCategory = uploadCategorySelect?.value || pendingUploadCategory;
    pendingUploadSubcategory = uploadSubcategorySelect?.value || defaultSubcategoryFor(pendingUploadCategory);
    fileInput?.click();
  });

  document.querySelectorAll("[data-kb-close-upload]").forEach((button) => {
    button.addEventListener("click", closeUploadModal);
  });

  uploadModal?.addEventListener("click", (event) => {
    if (event.target === uploadModal) closeUploadModal();
  });

  fileInput?.addEventListener("change", async () => {
    const selectedFiles = [...fileInput.files];
    if (!selectedFiles.length) return;
    const targetCategory = pendingUploadCategory || (activeCategory === "all" ? "product" : activeCategory);
    const targetSubcategory = pendingUploadSubcategory || defaultSubcategoryFor(targetCategory);
    const description = uploadDescriptionInput?.value.trim() || "";
    let savedCount = 0;
    for (const file of selectedFiles) {
      const format = (file.name.split(".").pop() || "file").toLowerCase();
      const id = `kb-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const fileMeta = {
        id,
        category: targetCategory,
        subcategory: targetSubcategory,
        format,
        status: "enabled",
        icon: fileIconFor(format, targetCategory),
        iconClass: fileClassFor(format, targetCategory),
        name: file.name,
        description,
        time: formatTime(),
      };
      try {
        await putStoredBlob({ id, name: file.name, type: file.type, size: file.size, blob: file, savedAt: Date.now() });
        tableBody.prepend(createFileRow(fileMeta));
        savedCount += 1;
      } catch {
        knowledgeFeedback("上传失败", `${file.name} 没有保存成功，请确认浏览器允许本地数据库。`);
      }
    }
    fileInput.value = "";
    if (uploadDescriptionInput) uploadDescriptionInput.value = "";
    renumberRows();
    saveKnowledgeState();
    applyFilters();
    closeUploadModal();
    knowledgeFeedback("上传并保存完成", `已保存 ${savedCount} 个文件到当前知识库分类，刷新页面后仍会保留。`);
  });

  saveFileNameButton?.addEventListener("click", () => {
    if (!editingFileRow) return;
    const cleanName = editFileNameInput?.value.trim();
    if (!cleanName) {
      knowledgeFeedback("请输入文件名称", "文件名称不能为空。");
      return;
    }
    const fileNameCell = editingFileRow.children[2];
    const oldName = editingFileRow.dataset.fileName || fileNameCell?.textContent.trim() || "当前文件";
    const nextCategory = editCategorySelect?.value || editingFileRow.dataset.category || "product";
    const nextSubcategory = editSubcategorySelect?.value || defaultSubcategoryFor(nextCategory);
    const nextDescription = editDescriptionInput?.value.trim() || "";
    if (fileNameCell) {
      const icon = fileNameCell.querySelector(".file-icon")?.outerHTML || "";
      const note = nextDescription ? `<span class="kb-file-note" title="${safeText(nextDescription)}">${safeText(nextDescription)}</span>` : "";
      fileNameCell.innerHTML = `${icon}${safeText(cleanName)}${note}`;
      editingFileRow.dataset.fileName = cleanName;
    }
    editingFileRow.dataset.description = nextDescription;
    editingFileRow.dataset.category = nextCategory;
    editingFileRow.dataset.subcategory = nextSubcategory;
    if (editingFileRow.children[3]) editingFileRow.children[3].textContent = categoryLabel[nextCategory] || nextCategory;
    const subcategoryTag = editingFileRow.children[4]?.querySelector(".kb-tag");
    if (subcategoryTag) subcategoryTag.textContent = subcategoryLabel[nextSubcategory] || nextSubcategory;
    saveKnowledgeState();
    closeEditFileModal();
    applyFilters();
    knowledgeFeedback("文件已修改", `${oldName} 已更新到 ${categoryLabel[nextCategory] || nextCategory} / ${subcategoryLabel[nextSubcategory] || nextSubcategory}。`);
  });

  document.querySelectorAll("[data-kb-close-edit]").forEach((button) => {
    button.addEventListener("click", closeEditFileModal);
  });

  editFileModal?.addEventListener("click", (event) => {
    if (event.target === editFileModal) closeEditFileModal();
  });

  editFileNameInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveFileNameButton?.click();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (uploadModal && !uploadModal.hidden) closeUploadModal();
    if (editFileModal && !editFileModal.hidden) closeEditFileModal();
  });

  [document.getElementById("knowledgeRefresh")].forEach((button) => {
    button?.addEventListener("click", () => {
      closeMenus();
      loadLabelState();
      restoreRowsFromStorage();
      upgradeActionCells();
      renumberRows();
      applyCategoryOrder();
      applySubcategoryOrder();
      applyFilters();
      knowledgeFeedback("知识库已刷新", "已从本地保存库重新读取文件、分类和状态。");
    });
  });

  batchAction?.addEventListener("change", () => {
    const action = batchAction.value;
    if (action === "批量操作") return;
    const targets = selectedRows();
    if (!targets.length) {
      knowledgeFeedback("请选择文件", "先勾选当前列表中的文件，再执行批量操作。");
      batchAction.selectedIndex = 0;
      return;
    }
    if (action === "批量启用") targets.forEach((row) => setRowStatus(row, "enabled"));
    if (action === "批量禁用") targets.forEach((row) => setRowStatus(row, "disabled"));
    if (action === "批量删除") {
      targets.forEach((row) => {
        deleteStoredBlob(row.dataset.fileId).catch(() => {});
        row.remove();
      });
      renumberRows();
    } else {
      targets.forEach((row) => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox) checkbox.checked = false;
      });
    }
    saveKnowledgeState();
    applyFilters();
    knowledgeFeedback(action, `已处理 ${targets.length} 个文件。`);
    batchAction.selectedIndex = 0;
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".kb-file-table")) closeMenus();
  });

  loadLabelState();
  restoreRowsFromStorage();
  upgradeActionCells();
  renumberRows();
  applyCategoryOrder();
  applySubcategoryOrder();
  syncActiveCategoryButtons();
  syncActiveSubcategoryButtons();
  syncSubcategoryTabs();
  updateTabCounts();
  knowledgeFeedback("知识库文件管理台", "现在支持真实上传并保存到本机浏览器，刷新页面后仍会保留。");
}

initKnowledgeModule();

const AUTO_CONFIG_KEY = "operation-center-ad-automation-config";
const AUTO_TASK_KEY = "operation-center-ad-automation-tasks";
const AUTO_RUN_KEY = "operation-center-ad-automation-runs";
const AUTO_MEMORY_KEY = "operation-center-ad-automation-memories";

const projectOptions = [
  { name: "短线王新开", groupId: 7 },
  { name: "短线王续费", groupId: 27 },
  { name: "新开升级", groupId: 63 },
  { name: "选股王", groupId: 81 },
  { name: "中高端续费", groupId: 51, backendProjectName: "中高端版本续费" },
  { name: "猎手活动", groupId: 92 },
  { name: "基金", groupId: 64 },
  { name: "转介绍", groupId: 73 },
  { name: "加企微活动", groupId: 88 },
];

const automationTemplates = [
  { name: "短线王续费｜普通广告换图", projectName: "短线王续费", groupId: 27, adType: "normal", action: "copyAndReplace", note: "复用昨日普通广告，按素材文件名批量换图。" },
  { name: "短线王新开｜排除固定广告", projectName: "短线王新开", groupId: 7, adType: "normal", action: "copyAndReplace", excludeIds: [133083, 130298, 130297, 63745, 56465, 56464], note: "新开普通广告复制时排除固定历史广告。" },
  { name: "中高端续费｜PC弹窗换图", projectName: "中高端续费", groupId: 48, adType: "pcPopup", action: "replaceOnly", note: "目标日期已有广告时，只按素材目录换图。" },
  { name: "加企微活动｜APP弹窗只复制", projectName: "加企微活动", groupId: 88, adType: "appPopup", action: "copyOnly", note: "只生成目标日期副本，不执行换图。" },
];

const adTypeText = { normal: "普通广告", appPopup: "APP弹窗", pcPopup: "PC弹窗" };
const actionText = { copyAndReplace: "复制并换图", replaceOnly: "只换图", copyOnly: "只复制" };
const taskStateText = { pending: "待执行", running: "执行中", done: "已完成", fail: "失败" };

function $(id) {
  return document.getElementById(id);
}

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function isoDate(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function parseIds(text) {
  return String(text || "")
    .split(/[,\s;；，、]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => Number(item))
    .filter((item) => Number.isFinite(item));
}

function automationPayload() {
  return {
    projectName: $("autoProject")?.value || "短线王续费",
    groupId: Number($("autoGroupId")?.value || 27),
    adType: $("autoAdType")?.value || "normal",
    action: $("autoAction")?.value || "copyAndReplace",
    sourceDate: $("autoSourceDate")?.value || "",
    targetDate: $("autoTargetDate")?.value || "",
    assetDir: $("autoAssetDir")?.value.trim() || "",
    excludeIds: parseIds($("autoExcludeIds")?.value),
    note: $("autoNote")?.value.trim() || "",
  };
}

function fillAutomationForm(config = {}) {
  if (!$("autoProject")) return;
  const projectAliases = { 中高端续费: "中高端续费", 猎手复购: "猎手活动", 基金社群: "基金" };
  const projectValue = projectAliases[config.projectName] || config.projectName || "短线王新开";
  $("autoProject").value = [...$("autoProject").options].some((option) => option.value === projectValue) ? projectValue : "短线王新开";
  $("autoGroupId").value = config.groupId || $("autoProject").selectedOptions[0]?.dataset.group || 27;
  $("autoAdType").value = config.adType || "normal";
  $("autoAction").value = config.action || "copyAndReplace";
  $("autoSourceDate").value = config.sourceDate || isoDate(-1);
  $("autoTargetDate").value = config.targetDate || isoDate(0);
  $("autoAssetDir").value = config.assetDir || "";
  $("autoExcludeIds").value = (config.excludeIds || []).join(",");
  $("autoNote").value = config.note || "";
  syncAutomationActionFields();
}

function syncAutomationActionFields() {
  const action = $("autoAction")?.value;
  if ($("autoAssetDir")) $("autoAssetDir").disabled = action === "copyOnly";
  if ($("autoSourceDate")) $("autoSourceDate").disabled = action === "replaceOnly";
}

function validateAutomationPayload(payload) {
  if (payload.action !== "replaceOnly" && !payload.sourceDate) return "请先填写来源日期。";
  if (!payload.targetDate) return "请先填写目标日期。";
  if (payload.action !== "copyOnly" && !payload.assetDir) return "换图任务需要填写素材文件夹。";
  return "";
}

function setAutomationStatus(text, className = "") {
  const status = $("autoStatus");
  if (!status) return;
  status.className = `automation-status ${className}`.trim();
  status.textContent = text;
}

function automationTaskTitle(task) {
  const payload = task.payload || {};
  return `${payload.projectName || "-"} ｜ ${adTypeText[payload.adType] || "-"} ｜ ${actionText[payload.action] || "-"}`;
}

function automationTaskRange(task) {
  const payload = task.payload || {};
  return payload.action === "replaceOnly" ? `只换图：${payload.targetDate || "-"}` : `${payload.sourceDate || "-"} -> ${payload.targetDate || "-"}`;
}

function renderAutomationTemplates() {
  const box = $("autoTemplates");
  if (!box) return;
  box.innerHTML = automationTemplates.map((template, index) => `
    <button type="button" data-auto-template="${index}">
      <strong>${safeText(template.name)}</strong>
      <span>${safeText(template.projectName)} ｜ ${adTypeText[template.adType]} ｜ ${actionText[template.action]}</span>
    </button>
  `).join("");

  box.querySelectorAll("[data-auto-template]").forEach((button) => {
    button.addEventListener("click", () => {
      const template = automationTemplates[Number(button.dataset.autoTemplate)];
      fillAutomationForm({
        ...automationPayload(),
        ...template,
        sourceDate: $("autoSourceDate").value || isoDate(-1),
        targetDate: $("autoTargetDate").value || isoDate(0),
      });
      setAutomationStatus(`已载入模板：${template.name}`, "ok");
    });
  });
}

function renderAutomationTasks() {
  const box = $("autoTaskList");
  if (!box) return;
  const tasks = readStore(AUTO_TASK_KEY, []);
  if (!tasks.length) {
    box.innerHTML = '<div class="empty-state">暂无任务。填写左侧配置后点击“创建任务”，可一次添加多条再批量执行。</div>';
    return;
  }

  box.innerHTML = tasks.map((task) => `
    <div class="task-item ${safeText(task.status || "pending")}">
      <div>
        <strong>${safeText(automationTaskTitle(task))}</strong>
        <span>${safeText(automationTaskRange(task))} ｜ 分组 ${safeText(task.payload?.groupId || "")} ｜ ${taskStateText[task.status] || "待执行"}</span>
        <span>${safeText(task.message || task.payload?.assetDir || "等待执行")}</span>
      </div>
      <div class="task-actions">
        <button type="button" data-auto-load-task="${safeText(task.id)}">载入</button>
        <button type="button" data-auto-remove-task="${safeText(task.id)}">删除</button>
      </div>
    </div>
  `).join("");

  box.querySelectorAll("[data-auto-load-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = readStore(AUTO_TASK_KEY, []).find((item) => item.id === button.dataset.autoLoadTask);
      if (task) fillAutomationForm(task.payload || {});
    });
  });

  box.querySelectorAll("[data-auto-remove-task]").forEach((button) => {
    button.addEventListener("click", () => {
      writeStore(AUTO_TASK_KEY, readStore(AUTO_TASK_KEY, []).filter((item) => item.id !== button.dataset.autoRemoveTask));
      renderAutomationTasks();
    });
  });
}

function renderAutomationRuns() {
  const box = $("autoRuns");
  if (!box) return;
  const runs = readStore(AUTO_RUN_KEY, []);
  if (!runs.length) {
    box.innerHTML = '<div class="empty-state">暂无运行记录。</div>';
    return;
  }
  box.innerHTML = runs.slice(0, 4).map((run) => `
    <div class="run-item ${run.ok ? "" : "fail"}">
      <strong>${run.ok ? "成功" : "失败"}：${safeText(run.projectName)} ${safeText(run.sourceDate || "-")} -> ${safeText(run.targetDate || "-")}</strong>
      <span>${safeText(run.finishedAt)} ｜ ${adTypeText[run.adType]} ｜ ${actionText[run.action]} ｜ 来源 ${run.sourceCount}，目标 ${run.targetAfterCount}，上传 ${run.uploadedCount}</span>
      <span>${safeText(run.message)}</span>
    </div>
  `).join("") + (runs.length > 4 ? `<button type="button" class="run-more">仅展示最近 4 条，共 ${runs.length} 条</button>` : "");
}

function renderAutomationMemories() {
  const box = $("autoMemories");
  if (!box) return;
  const memories = readStore(AUTO_MEMORY_KEY, []);
  if (!memories.length) {
    box.innerHTML = '<div class="empty-state">暂无操作记忆。保存带备注的配置后会显示在这里。</div>';
    return;
  }
  box.innerHTML = memories.slice(0, 12).map((memory) => `
    <div class="memory-item">
      <strong>${safeText(memory.projectName)} ｜ ${adTypeText[memory.adType]} ｜ ${actionText[memory.action]}</strong>
      <span>${safeText(memory.savedAt)} ｜ ${safeText(memory.sourceDate || "-")} -> ${safeText(memory.targetDate || "-")}</span>
      <p>${safeText(memory.note)}</p>
    </div>
  `).join("");
}

function saveAutomationMemory(payload, source = "保存配置") {
  if (!payload.note) return;
  const memories = readStore(AUTO_MEMORY_KEY, []);
  memories.unshift({
    ...payload,
    source,
    savedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
  });
  writeStore(AUTO_MEMORY_KEY, memories.slice(0, 50));
  renderAutomationMemories();
}

function saveAutomationConfig() {
  const payload = automationPayload();
  writeStore(AUTO_CONFIG_KEY, payload);
  saveAutomationMemory(payload, "保存配置");
  setAutomationStatus("配置已保存。这里只保存参数和备注，没有执行广告任务。", "ok");
}

function createAutomationTask() {
  const payload = automationPayload();
  const error = validateAutomationPayload(payload);
  if (error) {
    setAutomationStatus(error, "fail");
    return;
  }
  const tasks = readStore(AUTO_TASK_KEY, []);
  tasks.push({
    id: `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    status: "pending",
    payload,
    message: "等待执行",
  });
  writeStore(AUTO_TASK_KEY, tasks.slice(-100));
  renderAutomationTasks();
  setAutomationStatus("任务已加入任务列表。", "ok");
}

function buildAutomationRun(payload, ok = true) {
  const sourceCount = payload.action === "replaceOnly" ? 0 : 8 + Math.floor(Math.random() * 5);
  const uploadedCount = payload.action === "copyOnly" ? 0 : 3 + Math.floor(Math.random() * 4);
  const unmatched = payload.action === "copyOnly" ? 0 : Math.floor(Math.random() * 2);
  const targetAfterCount = payload.action === "replaceOnly" ? 6 + Math.floor(Math.random() * 4) : sourceCount;
  const message = payload.action === "copyOnly"
    ? `只复制流程已执行完成；目标日期当前 ${targetAfterCount} 条，未换图。`
    : `${payload.action === "replaceOnly" ? "只换图已执行" : "复制并换图已执行"}；实际换图成功 ${Math.max(0, uploadedCount - unmatched)} 个，未匹配 ${unmatched} 个。`;
  return {
    ok,
    ...payload,
    sourceCount,
    uploadedCount,
    targetAfterCount,
    finishedAt: new Date().toLocaleString("zh-CN", { hour12: false }),
    message,
  };
}

function persistAutomationRun(run) {
  const runs = readStore(AUTO_RUN_KEY, []);
  runs.unshift(run);
  writeStore(AUTO_RUN_KEY, runs.slice(0, 30));
  renderAutomationRuns();
}

async function executeAutomationPayload(payload) {
  await new Promise((resolve) => setTimeout(resolve, 520));
  const run = buildAutomationRun(payload, true);
  persistAutomationRun(run);
  saveAutomationMemory(payload, "执行任务");
  return run;
}

async function runAutomationTask() {
  const payload = automationPayload();
  const error = validateAutomationPayload(payload);
  if (error) {
    setAutomationStatus(error, "fail");
    return;
  }
  const button = $("autoRunTask");
  if (button) button.disabled = true;
  setAutomationStatus("正在执行演示任务：校验配置、复制目标日期副本、按素材文件名匹配换图。");
  try {
    const run = await executeAutomationPayload(payload);
    setAutomationStatus(run.message, "ok");
  } catch (error) {
    setAutomationStatus(`执行失败：${error.message}`, "fail");
  } finally {
    if (button) button.disabled = false;
  }
}

async function runAutomationTaskQueue() {
  let tasks = readStore(AUTO_TASK_KEY, []);
  const todo = tasks.filter((task) => task.status !== "done");
  if (!todo.length) {
    setAutomationStatus("任务列表里没有待执行任务。");
    return;
  }
  const button = $("autoRunTaskQueue");
  if (button) button.disabled = true;
  let ok = 0;
  let fail = 0;
  for (const task of todo) {
    tasks = readStore(AUTO_TASK_KEY, []);
    const index = tasks.findIndex((item) => item.id === task.id);
    if (index < 0) continue;
    tasks[index] = { ...tasks[index], status: "running", message: "正在执行..." };
    writeStore(AUTO_TASK_KEY, tasks);
    renderAutomationTasks();
    setAutomationStatus(`正在执行任务 ${ok + fail + 1}/${todo.length}：${automationTaskTitle(tasks[index])}`);
    try {
      const error = validateAutomationPayload(tasks[index].payload || {});
      if (error) throw new Error(error);
      const run = await executeAutomationPayload(tasks[index].payload);
      tasks = readStore(AUTO_TASK_KEY, []);
      const doneIndex = tasks.findIndex((item) => item.id === task.id);
      if (doneIndex >= 0) {
        tasks[doneIndex] = { ...tasks[doneIndex], status: "done", finishedAt: run.finishedAt, message: run.message };
        writeStore(AUTO_TASK_KEY, tasks);
      }
      ok += 1;
    } catch (error) {
      tasks = readStore(AUTO_TASK_KEY, []);
      const failIndex = tasks.findIndex((item) => item.id === task.id);
      if (failIndex >= 0) {
        tasks[failIndex] = { ...tasks[failIndex], status: "fail", message: `执行失败：${error.message}` };
        writeStore(AUTO_TASK_KEY, tasks);
      }
      fail += 1;
    }
    renderAutomationTasks();
  }
  if (button) button.disabled = false;
  setAutomationStatus(`任务列表执行完成：成功 ${ok} 个，失败 ${fail} 个。`, fail ? "fail" : "ok");
}

function clearDoneAutomationTasks() {
  writeStore(AUTO_TASK_KEY, readStore(AUTO_TASK_KEY, []).filter((task) => task.status !== "done"));
  renderAutomationTasks();
  setAutomationStatus("已清除完成任务。", "ok");
}

function initAutomationModule() {
  if (!$("autoProject")) return;
  $("automationHelperState")?.classList.add("ok");
  if ($("automationHelperState")) $("automationHelperState").textContent = "演示模式";
  const saved = readStore(AUTO_CONFIG_KEY, null);
  fillAutomationForm(saved || { sourceDate: isoDate(-1), targetDate: isoDate(0) });
  $("autoProject").addEventListener("change", () => {
    $("autoGroupId").value = $("autoProject").selectedOptions[0]?.dataset.group || 27;
    if ($("autoProject").value === "短线王新开" && $("autoAdType").value === "normal" && !$("autoExcludeIds").value.trim()) {
      $("autoExcludeIds").value = "133083,130298,130297,63745,56465,56464";
    }
  });
  $("autoAction").addEventListener("change", syncAutomationActionFields);
  $("autoSaveConfig").addEventListener("click", saveAutomationConfig);
  $("autoCreateTask").addEventListener("click", createAutomationTask);
  $("autoRunTask").addEventListener("click", runAutomationTask);
  $("autoRunTaskQueue").addEventListener("click", runAutomationTaskQueue);
  $("autoClearDoneTasks").addEventListener("click", clearDoneAutomationTasks);
  renderAutomationTemplates();
  renderAutomationTasks();
  renderAutomationRuns();
  renderAutomationMemories();
}

initAutomationModule();

const periodData = {
  week: {
    labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    metrics: {
      revenue: { values: [960000, 1040000, 1010000, 1120000, 1180000, 1140000, 1286000], display: ["960,000", "1,040,000", "1,010,000", "1,120,000", "1,180,000", "1,140,000", "1,286,000"], lineValues: [138, 146, 151, 158, 162, 169, 176], lineDisplay: ["138", "146", "151", "158", "162", "169", "176"], lineLabel: "单量", lineColor: "#16b6a1", lineArea: "rgba(22, 182, 161, 0.15)", title: "业绩 / 单量", text: "柱状：业绩；折线：单量" },
      ads: { values: [242000, 258000, 251000, 276000, 269000, 274000, 284000], display: ["242,000", "258,000", "251,000", "276,000", "269,000", "274,000", "284,000"], lineValues: [2.43, 2.58, 2.51, 2.76, 2.69, 2.74, 2.86], lineDisplay: ["2.43%", "2.58%", "2.51%", "2.76%", "2.69%", "2.74%", "2.86%"], lineLabel: "点击率", lineColor: "#ff9f2d", lineArea: "rgba(255, 159, 45, 0.16)", title: "广告展示 / 点击率", text: "柱状：广告展示；折线：点击率" },
      community: { values: [31, 34, 37, 35, 39, 41, 42], display: ["31", "34", "37", "35", "39", "41", "42"], lineValues: [238, 254, 276, 263, 291, 307, 318], lineDisplay: ["238", "254", "276", "263", "291", "307", "318"], lineLabel: "日转发", lineColor: "#7c6dff", lineArea: "rgba(124, 109, 255, 0.16)", title: "社群文案数 / 日转发", text: "柱状：社群文案数；折线：日转发" },
    },
  },
  month: {
    labels: ["1周", "2周", "3周", "4周", "5周", "6周"],
    metrics: {
      revenue: { values: [620000, 690000, 760000, 710000, 880000, 930000], display: ["620,000", "690,000", "760,000", "710,000", "880,000", "930,000"], lineValues: [82, 91, 108, 96, 121, 138], lineDisplay: ["82", "91", "108", "96", "121", "138"], lineLabel: "单量", lineColor: "#16b6a1", lineArea: "rgba(22, 182, 161, 0.15)", title: "业绩 / 单量", text: "柱状：业绩；折线：单量" },
      ads: { values: [186000, 214000, 238000, 221000, 267000, 284000], display: ["186,000", "214,000", "238,000", "221,000", "267,000", "284,000"], lineValues: [2.18, 2.32, 2.49, 2.37, 2.68, 2.86], lineDisplay: ["2.18%", "2.32%", "2.49%", "2.37%", "2.68%", "2.86%"], lineLabel: "点击率", lineColor: "#ff9f2d", lineArea: "rgba(255, 159, 45, 0.16)", title: "广告展示 / 点击率", text: "柱状：广告展示；折线：点击率" },
      community: { values: [28, 31, 35, 34, 39, 42], display: ["28", "31", "35", "34", "39", "42"], lineValues: [212, 238, 267, 259, 294, 318], lineDisplay: ["212", "238", "267", "259", "294", "318"], lineLabel: "日转发", lineColor: "#7c6dff", lineArea: "rgba(124, 109, 255, 0.16)", title: "社群文案数 / 日转发", text: "柱状：社群文案数；折线：日转发" },
    },
  },
};

const lineSeries = [
  {
    name: "中高端续费",
    color: "#1976ff",
    day: [51, 54, 59, 63, 68, 72, 76, 81, 84, 88, 90, 92],
    week: [284, 302, 318, 336, 351, 372, 386, 402, 418, 431, 446, 462],
    month: [1080, 1160, 1218, 1325, 1402, 1490, 1588, 1660, 1748, 1832, 1925, 2040],
  },
  {
    name: "新开升级+选股王",
    color: "#26c281",
    day: [47, 51, 56, 60, 64, 67, 69, 73, 75, 76, 78, 79],
    week: [256, 276, 291, 309, 324, 338, 352, 369, 381, 395, 408, 424],
    month: [930, 1015, 1088, 1162, 1248, 1330, 1415, 1496, 1572, 1648, 1735, 1810],
  },
  {
    name: "猎手复购",
    color: "#ff9f2d",
    day: [43, 46, 44, 50, 55, 58, 61, 65, 68, 72, 75, 77],
    week: [218, 231, 228, 246, 263, 279, 295, 306, 318, 335, 349, 366],
    month: [780, 825, 870, 918, 982, 1040, 1115, 1180, 1252, 1328, 1405, 1510],
  },
];

const projectTrendPeriods = {
  day: {
    labels: ["6/26", "6/27", "6/28", "6/29", "6/30", "7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"],
  },
  week: {
    labels: ["4W1", "4W2", "4W3", "4W4", "5W1", "5W2", "5W3", "5W4", "6W1", "6W2", "6W3", "6W4"],
  },
  month: {
    labels: ["8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  },
};

let lineOffset = 0;
let currentPeriod = "week";
let currentTrendKey = "revenue";
let currentProjectPeriod = "day";

function renderBarChart(period = currentPeriod) {
  const chart = document.querySelector("#operationBarChart");
  if (!chart) return;
  const data = periodData[period];
  const metric = data.metrics[currentTrendKey] || data.metrics.revenue;
  chart.style.setProperty("--combo-line", metric.lineColor || "#ff9f2d");
  chart.style.setProperty("--combo-area", metric.lineArea || "rgba(255, 159, 45, 0.14)");
  const max = Math.max(...metric.values);
  const lineValues = metric.lineValues || [];
  const lineMin = Math.min(...lineValues);
  const lineMax = Math.max(...lineValues);
  const lineRange = lineMax - lineMin || 1;
  const linePoints = lineValues.map((value, index) => ({
    x: 8 + (index / Math.max(1, lineValues.length - 1)) * 84,
    y: 18 + (1 - (value - lineMin) / lineRange) * 54,
    label: metric.lineDisplay?.[index] || value,
  }));
  const linePath = smoothPath(linePoints);
  const areaPath = `${linePath} L${linePoints.at(-1).x.toFixed(2)},88 L${linePoints[0].x.toFixed(2)},88 Z`;

  const bars = metric.values
    .map((value, index) => {
      const height = Math.max(16, Math.round((value / max) * 132));
      return `
        <div class="bar-col">
          <span style="--h: ${height}px" data-value="${metric.display?.[index] || value}"></span>
          <em>${data.labels[index]}</em>
        </div>
      `;
    })
    .join("");
  const line = `
    <svg class="combo-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="${metric.lineLabel}趋势折线">
      <path class="combo-area" d="${areaPath}" />
      <path class="combo-glow" d="${linePath}" />
      <path class="combo-curve" d="${linePath}" />
      ${linePoints.map((point) => `<circle cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="2.5"></circle>`).join("")}
    </svg>
    <div class="combo-point-labels">
      ${linePoints.map((point) => `<span style="left:${point.x.toFixed(2)}%; top:${point.y.toFixed(2)}%">${point.label}</span>`).join("")}
    </div>
    <div class="combo-legend"><b>柱状</b>${metric.title.split(" / ")[0]}<b>折线</b>${metric.lineLabel}</div>
  `;
  chart.innerHTML = `<div class="combo-bars">${bars}</div>${line}`;

  Object.entries(data.metrics).forEach(([key, item]) => {
    const option = document.querySelector(`[data-trend-key="${key}"]`);
    if (!option) return;
    option.classList.toggle("active", key === currentTrendKey);
    option.querySelector("strong").textContent = item.title;
    option.querySelector("span").textContent = item.text;
  });
}

function smoothPath(points) {
  if (points.length < 2) return "";
  return points.reduce((path, point, index, list) => {
    if (index === 0) return `M${point.x.toFixed(2)},${point.y.toFixed(2)}`;
    const prev = list[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${path} C${midX.toFixed(2)},${prev.y.toFixed(2)} ${midX.toFixed(2)},${point.y.toFixed(2)} ${point.x.toFixed(2)},${point.y.toFixed(2)}`;
  }, "");
}

function pointsToPath(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ");
}

function pointsToSmoothPath(points) {
  if (points.length < 2) return pointsToPath(points);
  return points.reduce((path, point, index, list) => {
    if (index === 0) return `M${point.x},${point.y}`;
    const prev = list[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${path} C${midX},${prev.y} ${midX},${point.y} ${point.x},${point.y}`;
  }, "");
}

function renderLineChart() {
  const svg = document.querySelector("#productLineChart");
  if (!svg) return;

  const width = 520;
  const height = 210;
  const padding = { top: 24, right: 26, bottom: 34, left: 34 };
  const period = projectTrendPeriods[currentProjectPeriod] || projectTrendPeriods.day;
  const labels = period.labels;
  const series = lineSeries.map((item, index) => ({
    ...item,
    values: item[currentProjectPeriod].map((value, valueIndex) => {
      const wave = ((lineOffset + index + valueIndex) % 3) * 2;
      return value + wave;
    }),
  }));
  const allValues = series.flatMap((item) => item.values);
  const min = Math.min(...allValues) - 8;
  const max = Math.max(...allValues) + 8;
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const xFor = (index) => padding.left + (index / (labels.length - 1)) * plotWidth;
  const yFor = (value) => padding.top + (1 - (value - min) / (max - min)) * plotHeight;

  const grid = [0, 1, 2, 3].map((tick) => {
    const y = padding.top + (tick / 3) * plotHeight;
    return `<line class="chart-grid-line" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" />`;
  }).join("");

  const labelMarkup = labels
    .map((label, index) => `<text class="chart-label" x="${xFor(index)}" y="${height - 10}" text-anchor="middle">${label}</text>`)
    .join("");

  const lines = series
    .map((item, index) => {
      const points = item.values.map((value, index) => ({ x: xFor(index), y: yFor(value), value }));
      const linePath = pointsToSmoothPath(points);
      const areaPath = `${linePath} L${points.at(-1).x},${height - padding.bottom} L${points[0].x},${height - padding.bottom} Z`;
      const pointMarkup = points
        .map((point) => `<circle class="chart-point" cx="${point.x}" cy="${point.y}" r="4" stroke="${item.color}" />`)
        .join("");
      const last = points.at(-1);
      const labelOffsets = [-18, -4, 12];
      const labelY = Math.max(padding.top + 8, Math.min(height - padding.bottom - 6, last.y + labelOffsets[index]));
      return `
        <path class="chart-area" d="${areaPath}" fill="${item.color}"></path>
        <path class="chart-line" d="${linePath}" stroke="${item.color}"></path>
        ${pointMarkup}
        <text class="chart-value-label" x="${last.x - 8}" y="${labelY}" text-anchor="end">${item.name}</text>
      `;
    })
    .join("");

  svg.innerHTML = `${grid}${labelMarkup}${lines}`;
}

document.querySelectorAll("#chartPeriod button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#chartPeriod button").forEach((item) => item.classList.toggle("active", item === button));
    currentPeriod = button.dataset.period;
    renderBarChart();
  });
});

document.querySelectorAll("[data-trend-key]").forEach((button) => {
  button.addEventListener("click", () => {
    currentTrendKey = button.dataset.trendKey || "revenue";
    renderBarChart();
  });
});

document.querySelector("#shuffleLineChart")?.addEventListener("click", () => {
  lineOffset += 1;
  renderLineChart();
});

document.querySelectorAll("#projectTrendPeriod button").forEach((button) => {
  button.addEventListener("click", () => {
    currentProjectPeriod = button.dataset.projectPeriod || "day";
    document.querySelectorAll("#projectTrendPeriod button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    renderLineChart();
  });
});

renderBarChart("week");
renderLineChart();

const ADSTAT_SOURCE_URL = "https://zt.jingzhuan.cn/#/operation/circle/sheet/operate/adstat";
const ADSTAT_HELPER_URL = "http://127.0.0.1:5088";
const ADSTAT_STORAGE_KEY = "operation-center-analysis-rows";

function loadStoredAnalysisRows() {
  try {
    const rows = JSON.parse(localStorage.getItem(ADSTAT_STORAGE_KEY) || "null");
    return Array.isArray(rows) && rows.length ? rows : null;
  } catch {
    return null;
  }
}

function analysisRowKey(row) {
  return [row.date, row.project, row.channel, row.adType || row.adTypeName || row.bannerType || "", row.adId, row.rawId || ""].join("|");
}

function mergeAnalysisRows(...groups) {
  const merged = new Map();
  groups.flat().filter(Boolean).forEach((row) => merged.set(analysisRowKey(row), row));
  return [...merged.values()];
}

const seedAnalysisRows = typeof window !== "undefined" && Array.isArray(window.OPERATION_ADSTAT_SEED?.rows) ? window.OPERATION_ADSTAT_SEED.rows : [];
const backupAnalysisRows = typeof window !== "undefined" && Array.isArray(window.OPERATION_ADSTAT_BACKUP_SEED?.rows) ? window.OPERATION_ADSTAT_BACKUP_SEED.rows : [];
const storedAnalysisRows = loadStoredAnalysisRows() || [];

let analysisRows = mergeAnalysisRows(seedAnalysisRows, backupAnalysisRows, storedAnalysisRows);
if (!analysisRows.length) analysisRows = [
  { date: "2026-07-08", project: "短线王新开", channel: "APP", adId: "269301", title: "短线王新开福利", audience: "新注册1-7天", popup: 1480, click: 96, purchaseClick: 34, order: 16, deal: 5, material: "新开福利" },
  { date: "2026-07-08", project: "短线王新开", channel: "PC", adId: "108221", title: "短线工具体验提醒", audience: "新客未体验", popup: 720, click: 22, purchaseClick: 9, order: 5, deal: 1, material: "体验提醒" },
  { date: "2026-07-08", project: "短线王续费", channel: "APP", adId: "261821", title: "小白也能掌握的买点信号", audience: "活跃登录1-180天", popup: 2310, click: 182, purchaseClick: 64, order: 28, deal: 8, material: "买点信号" },
  { date: "2026-07-08", project: "短线王续费", channel: "APP", adId: "261820", title: "短线王年终钜惠", audience: "近1天注册用户", popup: 1760, click: 88, purchaseClick: 30, order: 18, deal: 0, material: "续费钜惠" },
  { date: "2026-07-08", project: "短线王续费", channel: "PC", adId: "107982", title: "续费承接提醒", audience: "已过期0-7天", popup: 920, click: 12, purchaseClick: 4, order: 3, deal: 0, material: "承接提醒" },
  { date: "2026-07-08", project: "短线王续费", channel: "PC", adId: "107981", title: "老用户权益升级", audience: "即将过期8-14天", popup: 680, click: 45, purchaseClick: 16, order: 7, deal: 2, material: "权益升级" },
  { date: "2026-07-08", project: "新开升级", channel: "APP", adId: "269110", title: "新开升级福利", audience: "新开成交7-14天", popup: 1120, click: 96, purchaseClick: 32, order: 16, deal: 5, material: "升级福利" },
  { date: "2026-07-08", project: "选股王", channel: "APP", adId: "270221", title: "选股王策略体验", audience: "选股功能活跃用户", popup: 840, click: 52, purchaseClick: 18, order: 8, deal: 2, material: "策略体验" },
  { date: "2026-07-08", project: "中高端续费", channel: "APP", adId: "268410", title: "服务权益到期提醒", audience: "中高端到期30天", popup: 1260, click: 94, purchaseClick: 41, order: 22, deal: 9, material: "服务权益" },
  { date: "2026-07-08", project: "猎手活动", channel: "PC", adId: "108032", title: "龙头狙击营活动", audience: "训练营到期用户", popup: 740, click: 18, purchaseClick: 8, order: 5, deal: 1, material: "活动提醒" },
  { date: "2026-07-08", project: "基金", channel: "APP", adId: "271016", title: "基金盘后提醒", audience: "基金关注用户", popup: 620, click: 41, purchaseClick: 14, order: 7, deal: 2, material: "盘后提醒" },
  { date: "2026-07-08", project: "转介绍", channel: "APP", adId: "272088", title: "老带新权益提醒", audience: "高活跃老用户", popup: 560, click: 36, purchaseClick: 12, order: 6, deal: 2, material: "老带新权益" },
  { date: "2026-07-08", project: "加企微活动", channel: "PC", adId: "273102", title: "添加企微领取服务提醒", audience: "未添加企微用户", popup: 980, click: 118, purchaseClick: 22, order: 11, deal: 3, material: "企微承接" },
  { date: "2026-07-07", project: "短线王新开", channel: "APP", adId: "269255", title: "短线王新客体验", audience: "新注册1-7天", popup: 1320, click: 88, purchaseClick: 29, order: 14, deal: 4, material: "新客体验" },
  { date: "2026-07-07", project: "短线王续费", channel: "APP", adId: "261701", title: "短线王续费活动", audience: "活跃登录1-180天", popup: 2050, click: 151, purchaseClick: 52, order: 21, deal: 6, material: "续费活动" },
  { date: "2026-07-07", project: "短线王续费", channel: "PC", adId: "107901", title: "续费优惠提醒", audience: "已过期0-7天", popup: 1180, click: 22, purchaseClick: 8, order: 5, deal: 0, material: "优惠提醒" },
  { date: "2026-07-07", project: "新开升级", channel: "APP", adId: "269060", title: "升级权益确认", audience: "新开成交7-14天", popup: 980, click: 75, purchaseClick: 24, order: 12, deal: 4, material: "权益确认" },
  { date: "2026-07-07", project: "选股王", channel: "APP", adId: "270188", title: "选股王功能提醒", audience: "选股功能活跃用户", popup: 780, click: 44, purchaseClick: 15, order: 6, deal: 1, material: "功能提醒" },
  { date: "2026-07-07", project: "中高端续费", channel: "APP", adId: "268366", title: "专属服务续费", audience: "中高端到期30天", popup: 1110, click: 81, purchaseClick: 31, order: 18, deal: 7, material: "专属服务" },
  { date: "2026-07-07", project: "猎手活动", channel: "PC", adId: "108001", title: "训练营活动权益", audience: "训练营到期用户", popup: 690, click: 24, purchaseClick: 9, order: 4, deal: 2, material: "活动权益" },
  { date: "2026-07-07", project: "基金", channel: "APP", adId: "271002", title: "基金内容承接", audience: "基金关注用户", popup: 580, click: 35, purchaseClick: 11, order: 6, deal: 1, material: "内容承接" },
  { date: "2026-07-07", project: "转介绍", channel: "APP", adId: "272061", title: "转介绍权益提醒", audience: "高活跃老用户", popup: 510, click: 31, purchaseClick: 9, order: 5, deal: 1, material: "权益提醒" },
  { date: "2026-07-07", project: "加企微活动", channel: "PC", adId: "273066", title: "企微服务承接", audience: "未添加企微用户", popup: 820, click: 86, purchaseClick: 18, order: 8, deal: 2, material: "企微服务" },
];

const analysisCommunity = {
  "短线王新开|2026-07-08": { totalCopy: 5, totalUsage: 39, avgUsage: 7.8, top: [{ usage: 13, content: "短线王新开用户先完成工具体验，再结合交易纪律理解买卖点信号。" }] },
  "短线王新开|2026-07-07": { totalCopy: 4, totalUsage: 31, avgUsage: 7.75, top: [{ usage: 10, content: "新客体验期重点关注短线工具入口和基础功能使用。" }] },
  "短线王续费|2026-07-08": {
    totalCopy: 8,
    totalUsage: 44,
    avgUsage: 5.5,
    top: [
      { usage: 14, content: "短线王续费福利进入最后确认期，老用户优先锁定权益，避免服务断档。" },
      { usage: 11, content: "盘面节奏变快，续费用户重点关注买卖点信号和仓位纪律。" },
    ],
  },
  "短线王续费|2026-07-07": { totalCopy: 7, totalUsage: 36, avgUsage: 5.14, top: [{ usage: 12, content: "续费权益已更新，今日重点提醒即将到期用户完成确认。" }] },
  "新开升级|2026-07-08": { totalCopy: 9, totalUsage: 52, avgUsage: 5.78, top: [{ usage: 16, content: "新开用户进入升级窗口，突出进阶权益和服务陪跑更有效。" }] },
  "新开升级|2026-07-07": { totalCopy: 7, totalUsage: 44, avgUsage: 6.29, top: [{ usage: 13, content: "新开升级用户更关注权益差异和进阶服务陪跑。" }] },
  "选股王|2026-07-08": { totalCopy: 4, totalUsage: 27, avgUsage: 6.75, top: [{ usage: 9, content: "选股王内容突出选股逻辑、筛选条件和使用路径，降低新用户理解成本。" }] },
  "选股王|2026-07-07": { totalCopy: 3, totalUsage: 21, avgUsage: 7, top: [{ usage: 8, content: "选股功能提醒以功能入口和案例讲解为主。" }] },
  "中高端续费|2026-07-08": { totalCopy: 6, totalUsage: 48, avgUsage: 8, top: [{ usage: 14, content: "服务到期前先复盘持仓问题，再确认中高端续费权益更容易承接。" }] },
  "中高端续费|2026-07-07": { totalCopy: 5, totalUsage: 36, avgUsage: 7.2, top: [{ usage: 12, content: "中高端续费重点强调服务连续性和专属权益。" }] },
  "猎手活动|2026-07-08": { totalCopy: 4, totalUsage: 31, avgUsage: 7.75, top: [{ usage: 10, content: "猎手活动用户更关注策略延续和训练营复盘，建议强化案例承接。" }] },
  "猎手活动|2026-07-07": { totalCopy: 4, totalUsage: 35, avgUsage: 8.75, top: [{ usage: 11, content: "训练营活动权益以复盘案例和课程承接为重点。" }] },
  "基金|2026-07-08": { totalCopy: 4, totalUsage: 28, avgUsage: 7, top: [{ usage: 9, content: "基金内容以盘后播报、组合跟踪和风险提示为主。" }] },
  "基金|2026-07-07": { totalCopy: 3, totalUsage: 23, avgUsage: 7.67, top: [{ usage: 8, content: "基金内容强调长期配置和盘后复盘，不做收益承诺。" }] },
  "转介绍|2026-07-08": { totalCopy: 3, totalUsage: 21, avgUsage: 7, top: [{ usage: 7, content: "转介绍活动强调老用户权益、邀请路径和领取规则。" }] },
  "转介绍|2026-07-07": { totalCopy: 3, totalUsage: 19, avgUsage: 6.33, top: [{ usage: 6, content: "老带新内容重点说明参与门槛和权益发放方式。" }] },
  "加企微活动|2026-07-08": { totalCopy: 5, totalUsage: 39, avgUsage: 7.8, top: [{ usage: 13, content: "加企微活动突出服务提醒、资料领取和后续承接动作。" }] },
  "加企微活动|2026-07-07": { totalCopy: 4, totalUsage: 35, avgUsage: 8.75, top: [{ usage: 12, content: "企微承接内容重点强调添加路径和服务价值。" }] },
};

const analysisMarket = {
  emotion: "结构性活跃",
  index: "沪深两市震荡修复，科技与券商方向热度较高",
  money: "赚钱效应偏分化，短线用户更关注买卖点纪律",
  tags: ["半导体", "券商", "AI应用", "业绩线"],
  risk: "不编造行情结论，仅作为内容和素材承接背景。",
};

function fmt(value) {
  return Number(value || 0).toLocaleString("zh-CN");
}

function pct(value) {
  return `${Number(value || 0).toFixed(2)}%`;
}

function deltaClass(value) {
  const number = Number(value || 0);
  if (number > 0) return "up";
  if (number < 0) return "down";
  return "flat";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function sumAnalysis(rows) {
  const total = rows.reduce((acc, row) => {
    acc.popup += row.popup || 0;
    acc.click += row.click || 0;
    acc.purchaseClick += row.purchaseClick || 0;
    acc.order += row.order || 0;
    acc.deal += row.deal || 0;
    return acc;
  }, { popup: 0, click: 0, purchaseClick: 0, order: 0, deal: 0 });
  total.clickRate = total.popup ? (total.click * 100) / total.popup : 0;
  total.purchaseClickRate = total.click ? (total.purchaseClick * 100) / total.click : 0;
  total.orderSubmitRate = total.purchaseClick ? (total.order * 100) / total.purchaseClick : 0;
  total.paymentFinishRate = total.order ? (total.deal * 100) / total.order : 0;
  return total;
}

function groupAnalysisRows(rows, keyFn) {
  const map = new Map();
  rows.forEach((row) => {
    const key = keyFn(row);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(row);
  });
  return [...map.entries()]
    .map(([name, groupRows]) => ({ name, rows: groupRows, adCount: groupRows.length, ...sumAnalysis(groupRows) }))
    .sort((a, b) => b.deal - a.deal || b.popup - a.popup);
}

function rowTags(row) {
  const tags = [];
  if (row.popup >= 500 && row.clickRate < 2) tags.push("高曝光低点击");
  if (row.order > 0 && row.deal === 0) tags.push("有订单无成交");
  if (row.order > 0 && row.paymentFinishRate < 20) tags.push("付款承接弱");
  if (row.popup < 500) tags.push("样本偏小");
  if (!tags.length) tags.push("素材可复用");
  return tags;
}

function normalizeAnalysisRows() {
  analysisRows.forEach((row) => {
    row.clickRate = row.popup ? (row.click * 100) / row.popup : 0;
    row.purchaseClickRate = row.click ? (row.purchaseClick * 100) / row.click : 0;
    row.orderSubmitRate = row.purchaseClick ? (row.order * 100) / row.purchaseClick : 0;
    row.paymentFinishRate = row.order ? (row.deal * 100) / row.order : 0;
  });
}

function problemScore(row) {
  let score = 0;
  if (row.popup >= 500 && row.clickRate < 2) score += 80;
  if (row.order > 0 && row.deal === 0) score += 70;
  if (row.order > 0 && row.paymentFinishRate < 20) score += 50;
  if (row.popup < 500) score += 15;
  score += Math.min(60, row.popup / 50);
  score += Math.max(0, 5 - row.clickRate) * 8;
  return score;
}

function problemRows(rows) {
  return rows.filter((row) => rowTags(row).some((tag) => tag !== "素材可复用")).sort((a, b) => problemScore(b) - problemScore(a));
}

function analysisAdvice(row) {
  if (row.popup >= 500 && row.clickRate < 2) return `优先替换素材或调整首屏利益点，当前点击率 ${pct(row.clickRate)} 偏低。`;
  if (row.order > 0 && row.deal === 0) return "重点检查支付链路、权益表达和价格承接，当前有订单但成交为 0。";
  if (row.order > 0 && row.paymentFinishRate < 20) return "付款完成率偏低，建议复核订单到支付完成之间的承接。";
  if (row.popup < 500) return "样本量偏小，先观察一轮，不直接下结论。";
  return "表现稳定，可沉淀素材表达和人群口径。";
}

function metricDelta(current, previous, type = "number") {
  if (!previous && current) return '<span class="analysis-delta up">新增</span>';
  if (!previous && !current) return '<span class="analysis-delta flat">持平</span>';
  const diff = ((Number(current || 0) - Number(previous || 0)) * 100) / Math.abs(Number(previous || 1));
  const cls = deltaClass(diff);
  const arrow = diff > 0 ? "↑" : diff < 0 ? "↓" : "→";
  const text = type === "pct" ? `${arrow} ${Math.abs(diff).toFixed(1)}%` : `${arrow} ${Math.abs(diff).toFixed(1)}%`;
  return `<span class="analysis-delta ${cls}">${text}</span>`;
}

function kpiHtml(label, value, sub, key, current, previous, type = "number") {
  const display = type === "pct" ? pct(value) : fmt(value);
  return `<div class="analysis-kpi"><span>${label}</span>${metricDelta(current[key], previous?.[key], type)}<strong>${display}</strong><em>${sub}</em></div>`;
}

function currentAnalysisFilters() {
  const filterValue = document.querySelector("#analysisChannel")?.value || "adType:appPopup";
  const [filterMode, filterKey] = filterValue.includes(":") ? filterValue.split(":") : ["adType", filterValue];
  const isScopeFilter = filterMode === "scope";
  const adType = isScopeFilter ? "ALL" : filterKey;
  const appScope = isScopeFilter ? filterKey : "ALL";
  const adTypeLabel = isScopeFilter ? "全部广告类型" : (analysisAdTypes[adType]?.label || adType);
  const appScopeLabel = analysisAppScopes[appScope]?.label || appScope;
  return {
    project: document.querySelector("#analysisProject")?.value || "短线王续费",
    date: document.querySelector("#analysisDate")?.value || "2026-07-08",
    compareDate: document.querySelector("#analysisCompareDate")?.value || "2026-07-07",
    filterMode,
    filterValue,
    adType,
    adTypeLabel,
    appScope,
    appScopeLabel,
    appScopeBackendLabel: analysisAppScopes[appScope]?.backendLabel || appScope,
    filterLabel: isScopeFilter ? appScopeLabel : adTypeLabel,
    channel: appScope === "ALL" ? "ALL" : appScope,
    threshold: Number(document.querySelector("#analysisPopupThreshold")?.value || 1000),
  };
}

function rowAnalysisAdType(row) {
  const raw = String(row.adType || row.adTypeName || row.backendAdTypeName || row.bannerType || row._bannerType || "").toLowerCase();
  if (raw.includes("normal") || raw.includes("普通") || raw === "1") return "normal";
  if (raw.includes("notice") || raw.includes("通知") || raw === "3") return "appNotice";
  if (raw.includes("pc") || raw === "4") return "pcPopup";
  if (raw.includes("popup") || raw.includes("弹窗") || raw === "2") return "appPopup";
  return String(row.channel || "").toUpperCase().includes("PC") ? "pcPopup" : "appPopup";
}

function filteredAnalysisRows(date) {
  const filters = currentAnalysisFilters();
  const period = getStoredReportPeriod();
  const startDate = analysisPeriodStart(date, period);
  const allowedChannels = analysisAppScopes[filters.appScope]?.channels || ["APP", "PC"];
  return analysisRows.filter((row) => row.date >= startDate && row.date <= date
    && row.project === filters.project
    && (filters.adType === "ALL" || rowAnalysisAdType(row) === filters.adType)
    && allowedChannels.includes(String(row.channel || "").toUpperCase()));
}

function addDateDays(date, days) {
  const next = new Date(`${date}T00:00:00`);
  next.setDate(next.getDate() + days);
  return next.toISOString().slice(0, 10);
}

function analysisPeriodStart(date, period) {
  if (period === "weekly") return addDateDays(date, -6);
  if (period === "monthly") return `${date.slice(0, 8)}01`;
  if (period === "yearly") return `${date.slice(0, 4)}-01-01`;
  return date;
}

function analysisPeriodLabel(date, period) {
  const start = analysisPeriodStart(date, period);
  if (period === "weekly") return `${start} 至 ${date}`;
  if (period === "monthly") return `${date.slice(0, 7)} 月累计`;
  if (period === "yearly") return `${date.slice(0, 4)} 年累计`;
  return date;
}

function saveAnalysisRows() {
  localStorage.setItem("operation-center-analysis-rows", JSON.stringify(analysisRows));
}

let analysisUpdateStatusTimer = null;

function setAnalysisUpdateStatus(text, type = "") {
  const status = document.querySelector("#analysisUpdateStatus");
  if (!status) return;
  clearTimeout(analysisUpdateStatusTimer);
  status.textContent = text;
  status.className = `analysis-update-status show ${type}`.trim();
  analysisUpdateStatusTimer = setTimeout(() => {
    status.textContent = "";
    status.className = "analysis-update-status";
  }, 5000);
}

function normalizeBackendRows(rows, projectName) {
  return rows.map((row, index) => {
    const popup = Number(row.popup ?? row.popupCount ?? row.show ?? row.showCount ?? row["弹出人数"] ?? row["弹出数"] ?? row["展示"] ?? 0);
    const click = Number(row.click ?? row.clickCount ?? row["点击人数"] ?? row["点击数"] ?? 0);
    const purchaseClick = Number(row.purchaseClick ?? row.buyClick ?? row["购买点击人数"] ?? row["购买点击"] ?? 0);
    const order = Number(row.order ?? row.orderCount ?? row["提交订单"] ?? row["订单"] ?? 0);
    const deal = Number(row.deal ?? row.dealCount ?? row["成交人数"] ?? row["成交"] ?? 0);
    return {
      date: String(row.date ?? row["日期"] ?? currentAnalysisFilters().date),
      project: String(row.project ?? row.projectName ?? row["项目"] ?? projectName),
      channel: String(row.channel ?? row["渠道"] ?? "APP").toUpperCase().includes("PC") ? "PC" : "APP",
      adType: row.adType || row.adTypeName || row.backendAdTypeName || row.bannerType || row._bannerType || "",
      adId: String(row.adId ?? row.id ?? row["广告ID"] ?? row["广告id"] ?? `NEW-${Date.now()}-${index}`),
      title: String(row.title ?? row["标题"] ?? row.materialTitle ?? "后台同步素材"),
      audience: String(row.audience ?? row.audienceKey ?? row.target ?? row["命中人群"] ?? "后台同步人群"),
      popup,
      click,
      purchaseClick,
      order,
      deal,
      material: String(row.material ?? row.materialName ?? row["素材"] ?? row.title ?? row["标题"] ?? "后台素材").slice(0, 8),
    };
  });
}

async function updateAnalysisProject(projectName) {
  const button = document.querySelector("[data-analysis-update-current]");
  const filters = currentAnalysisFilters();
  const project = projectOptions.find((item) => item.name === projectName);
  const payload = {
    sourceUrl: ADSTAT_SOURCE_URL,
    projectName,
    backendProjectName: project?.backendProjectName || projectName,
    groupId: project?.groupId || "",
    filterMode: filters.filterMode,
    filterValue: filters.filterValue,
    adType: filters.adType === "ALL" ? "" : filters.adType,
    adTypeName: filters.adTypeLabel,
    bannerType: filters.adType === "ALL" ? "" : (analysisAdTypes[filters.adType]?.bannerType || 2),
    appScope: filters.appScope,
    appScopeName: filters.appScopeLabel,
    backendAppNames: filters.appScopeBackendLabel,
    currentDate: filters.date,
    compareDate: filters.compareDate,
    startDate: [filters.date, filters.compareDate].sort()[0],
    endDate: [filters.date, filters.compareDate].sort().at(-1),
    channel: filters.channel,
  };

  try {
    button?.classList.add("loading");
    if (button) button.innerHTML = `<span>${escapeHtml(projectName)}</span><b>更新中</b>`;
    setAnalysisUpdateStatus(`正在从后台抓取「${projectName}」数据，请保持后台已登录。`);

    const response = await fetch(`${ADSTAT_HELPER_URL}/update-latest`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    if (!response.ok || json.ok === false) throw new Error(json.status?.message || json.error || "本地助手更新失败");

    const backendRows = json.rows || json.data?.rows || json.adstatRows || [];
    if (Array.isArray(backendRows) && backendRows.length) {
      const normalized = normalizeBackendRows(backendRows, projectName);
      const replaceDates = new Set(normalized.map((row) => row.date));
      const allowedChannels = analysisAppScopes[filters.appScope]?.channels || ["APP", "PC"];
      analysisRows = analysisRows.filter((row) => !(row.project === projectName
        && replaceDates.has(row.date)
        && (filters.adType === "ALL" || rowAnalysisAdType(row) === filters.adType)
        && allowedChannels.includes(String(row.channel || "").toUpperCase())));
      analysisRows.push(...normalized);
      saveAnalysisRows();
    }

    const backupDates = json.status?.backup?.files?.map((file) => file.date).join("、");
    const backupText = backupDates ? `；已备份 ${backupDates}` : "";
    setAnalysisUpdateStatus(`「${projectName}」更新完成：${json.status?.message || "已同步后台数据"}${backupText}`, "ok");
    document.querySelector("#analysisProject").value = projectName;
    renderDataCenter();
  } catch (error) {
    const message = String(error.message || "");
    const guide = message.includes("Failed to fetch")
      ? "本地数据抓取助手未启动，请先启动本地抓取助手。"
      : "请确认后台窗口已打开、已登录，并且页面已有广告统计列表。";
    setAnalysisUpdateStatus(`更新失败：${message}。${guide}`, "fail");
    window.open(ADSTAT_SOURCE_URL, "_blank", "noopener,noreferrer");
  } finally {
    button?.classList.remove("loading");
    if (button) button.innerHTML = `<span>更新数据</span><b>${escapeHtml(document.querySelector("#analysisProject")?.value || projectName)}</b>`;
  }
}

function renderAnalysisOptions() {
  const projectEl = document.querySelector("#analysisProject");
  const dateEl = document.querySelector("#analysisDate");
  const compareEl = document.querySelector("#analysisCompareDate");
  if (!projectEl || projectEl.dataset.ready) return;
  const projects = projectOptions.map((project) => project.name);
  const dates = [...new Set(analysisRows.map((row) => row.date))].sort().reverse();
  projectEl.innerHTML = projects.map((project) => `<option value="${escapeHtml(project)}">${escapeHtml(project)}</option>`).join("");
  dateEl.value = dates[0] || "2026-07-08";
  compareEl.value = dates[1] || dates[0] || "2026-07-07";
  [projectEl, dateEl, compareEl, document.querySelector("#analysisChannel"), document.querySelector("#analysisPopupThreshold")].forEach((el) => {
    el?.addEventListener("input", renderDataCenter);
  });
  document.querySelector("#copyAnalysisSummary")?.addEventListener("click", () => {
    const text = document.querySelector("#analysisSummary")?.value || "";
    navigator.clipboard?.writeText(text);
  });
  const updateActions = document.querySelector("#analysisUpdateActions");
  if (updateActions) {
    updateActions.innerHTML = `<button type="button" data-analysis-update-current><span>更新数据</span><b>${escapeHtml(projectEl.value || projects[0])}</b></button>`;
    const updateButton = updateActions.querySelector("[data-analysis-update-current]");
    updateButton?.addEventListener("click", () => updateAnalysisProject(projectEl.value));
    projectEl.addEventListener("input", () => {
      const label = updateActions.querySelector("[data-analysis-update-current] b");
      if (label) label.textContent = projectEl.value;
    });
  }
  projectEl.dataset.ready = "1";
}

function renderDataCenter() {
  normalizeAnalysisRows();
  renderAnalysisOptions();
  const filters = currentAnalysisFilters();
  const rows = filteredAnalysisRows(filters.date);
  const compareRows = filteredAnalysisRows(filters.compareDate);
  const total = sumAnalysis(rows);
  const previous = compareRows.length ? sumAnalysis(compareRows) : null;
  if (!document.querySelector("#analysisMetrics")) return;
  const period = getStoredReportPeriod();
  document.querySelector("#analysisDateNote").textContent = `${filters.project}｜${analysisPeriodLabel(filters.date, period)} 对比 ${analysisPeriodLabel(filters.compareDate, period)}｜${filters.filterLabel}`;

  const problems = problemRows(rows);
  const previousWithExtra = previous ? { ...previous, adCount: compareRows.length, problemCount: problemRows(compareRows).length } : null;
  const currentWithExtra = { ...total, adCount: rows.length, problemCount: problems.length };
  const alertHtml = total.popup < filters.threshold ? `<div class="analysis-alert">预警：当日弹出数 ${fmt(total.popup)} 低于阈值 ${fmt(filters.threshold)}，需要检查广告弹出或数据更新是否异常。</div>` : "";

  document.querySelector("#analysisMetrics").innerHTML = [
    kpiHtml("广告数", rows.length, "投放素材", "adCount", currentWithExtra, previousWithExtra),
    kpiHtml("弹出数", total.popup, "曝光触达", "popup", currentWithExtra, previousWithExtra),
    kpiHtml("点击数", total.click, "点击人群", "click", currentWithExtra, previousWithExtra),
    kpiHtml("成交数", total.deal, "成交结果", "deal", currentWithExtra, previousWithExtra),
    kpiHtml("点击率", total.clickRate, "点击/弹出", "clickRate", currentWithExtra, previousWithExtra, "pct"),
    kpiHtml("付款完成率", total.paymentFinishRate, "成交/订单", "paymentFinishRate", currentWithExtra, previousWithExtra, "pct"),
    kpiHtml("提交订单", total.order, "订单线索", "order", currentWithExtra, previousWithExtra),
    kpiHtml("问题素材", problems.length, "需复核", "problemCount", currentWithExtra, previousWithExtra),
  ].join("") + alertHtml;

  const funnel = [["弹出", total.popup], ["点击", total.click], ["提交订单", total.order], ["成交", total.deal]];
  const maxFunnel = Math.max(1, ...funnel.map((item) => item[1]));
  document.querySelector("#analysisFunnel").innerHTML = funnel.map(([label, value]) => `
    <div class="analysis-funnel-row"><span>${label}</span><div class="analysis-funnel-track"><div class="analysis-funnel-fill" style="width:${Math.max(4, (value * 100) / maxFunnel)}%"></div></div><strong>${fmt(value)}</strong></div>
  `).join("");

  document.querySelector("#analysisChannelTable").innerHTML = `<tr><th>广告类型</th><th class="num">广告数</th><th class="num">弹出</th><th class="num">点击</th><th class="num">点击率</th><th class="num">成交</th><th class="num">付款完成率</th></tr>` +
    groupAnalysisRows(rows, (row) => analysisAdTypes[rowAnalysisAdType(row)]?.label || row.channel).map((group) => `<tr><td>${escapeHtml(group.name)}<br><span class="analysis-tag">${escapeHtml(filters.project)}</span></td><td class="num">${fmt(group.adCount)}</td><td class="num">${fmt(group.popup)}</td><td class="num">${fmt(group.click)}</td><td class="num">${pct(group.clickRate)}</td><td class="num">${fmt(group.deal)}</td><td class="num">${pct(group.paymentFinishRate)}</td></tr>`).join("");

  document.querySelector("#analysisAudienceTable").innerHTML = `<tr><th>命中人群</th><th class="num">广告数</th><th class="num">问题素材</th><th class="num">弹出</th><th class="num">点击</th><th class="num">点击率</th><th class="num">成交</th><th class="num">付款完成率</th></tr>` +
    groupAnalysisRows(rows, (row) => row.audience).map((group) => `<tr><td>${escapeHtml(group.name)}</td><td class="num">${fmt(group.adCount)}</td><td class="num">${fmt(problemRows(group.rows).length)}</td><td class="num">${fmt(group.popup)}</td><td class="num">${fmt(group.click)}</td><td class="num">${pct(group.clickRate)}</td><td class="num">${fmt(group.deal)}</td><td class="num">${pct(group.paymentFinishRate)}</td></tr>`).join("");

  document.querySelector("#analysisProblemCount").textContent = `共 ${problems.length} 条，显示 TOP ${Math.min(5, problems.length)} 条`;
  document.querySelector("#analysisProblemTable").innerHTML = `<tr><th>素材</th><th>广告ID</th><th>渠道</th><th>命中人群</th><th class="num">弹出</th><th class="num">点击率</th><th class="num">成交</th><th>问题标签</th><th>建议</th><th>待办</th></tr>` +
    problems.slice(0, 5).map((row) => `<tr><td><div class="analysis-material">${escapeHtml(row.material)}</div></td><td>${row.adId}</td><td>${escapeHtml(analysisAdTypes[rowAnalysisAdType(row)]?.label || row.channel)}</td><td>${escapeHtml(row.audience)}</td><td class="num">${fmt(row.popup)}</td><td class="num">${pct(row.clickRate)}</td><td class="num">${fmt(row.deal)}</td><td>${rowTags(row).map((tag) => `<span class="analysis-tag ${tag === "素材可复用" ? "" : row.clickRate < 2 || row.deal === 0 ? "up" : "down"}">${escapeHtml(tag)}</span>`).join("")}</td><td>${escapeHtml(analysisAdvice(row))}</td><td><button class="text-button" type="button">加入待办</button></td></tr>`).join("");

  document.querySelector("#analysisMarket").innerHTML = `市场情绪：${analysisMarket.emotion}<br>指数表现：${analysisMarket.index}<br>赚钱效应：${analysisMarket.money}<br>热点标签：${analysisMarket.tags.join("、")}<br>备注：${analysisMarket.risk}`;

  const community = analysisCommunity[`${filters.project}|${filters.date}`];
  document.querySelector("#analysisCommunity").innerHTML = community ? `
    <div class="analysis-community-grid"><div><span>文案数</span><strong>${fmt(community.totalCopy)}</strong></div><div><span>引用总数</span><strong>${fmt(community.totalUsage)}</strong></div><div><span>平均引用</span><strong>${Number(community.avgUsage).toFixed(2)}</strong></div></div>
    <div class="analysis-copy-list">${community.top.map((item, index) => `<div class="analysis-review-item"><strong>TOP${index + 1}｜${fmt(item.usage)} 次引用</strong><p>${escapeHtml(item.content)}</p></div>`).join("")}</div>
  ` : `<div class="analysis-empty">当前项目/日期暂无社群文案数据，建议确认素材管理是否已按项目标签录入当天文案。</div>`;

  const auto = analysisAutoReview(rows, compareRows);
  document.querySelector("#analysisReview").innerHTML = `
    <div class="analysis-review-item"><strong>1. 聚焦异常</strong><p>${escapeHtml(auto.focus)}</p></div>
    <div class="analysis-review-item"><strong>2. 关联动作</strong><p>${escapeHtml(auto.action)}</p></div>
    <div class="analysis-review-item"><strong>3. 驱动闭环</strong><p>${escapeHtml(auto.next)}</p></div>
  `;
  document.querySelector("#analysisSummary").value = analysisSummaryText(filters, total, problems, auto);
}

function analysisAutoReview(rows, compareRows) {
  const total = sumAnalysis(rows);
  const previous = compareRows.length ? sumAnalysis(compareRows) : null;
  const problems = problemRows(rows);
  const top = problems[0];
  const compare = previous ? `较对比日：弹出${metricDeltaText(total.popup, previous.popup)}，点击${metricDeltaText(total.click, previous.click)}，成交${metricDeltaText(total.deal, previous.deal)}，付款完成率${metricDeltaText(total.paymentFinishRate, previous.paymentFinishRate)}。` : "当前无对比日数据，先按阈值和问题素材判断。";
  return {
    focus: top ? `重点异常集中在广告 ${top.adId} / ${top.channel} / ${top.audience}，问题为 ${rowTags(top).filter((tag) => tag !== "素材可复用").join("、")}。整体${compare}` : `今日暂无明显问题素材。整体${compare}`,
    action: top ? "可能关联素材首屏利益点、人群匹配或支付承接链路，需要结合同人群高效素材复核。" : "当前投放动作相对稳定，继续观察新增素材与渠道流量变化。",
    next: top ? `今天优先复核广告 ${top.adId}，若点击率低则替换素材，若订单到成交弱则检查支付承接；复核后跟踪次日成交变化。` : "继续监控弹出量、点击率和付款完成率，若任一指标连续下滑，进入问题素材排查。",
  };
}

function metricDeltaText(current, previous) {
  const cur = Number(current || 0);
  const prev = Number(previous || 0);
  if (!prev && cur) return "新增";
  if (!prev && !cur) return "持平";
  const diff = ((cur - prev) * 100) / Math.abs(prev);
  return `${diff >= 0 ? "上升" : "下降"}${Math.abs(diff).toFixed(1)}%`;
}

function analysisSummaryText(filters, total, problems, auto) {
  return `【${filters.project} 日报】\n日期：${filters.date}\n筛选口径：${filters.filterLabel}${filters.filterMode === "scope" ? `（${filters.appScopeBackendLabel}）` : ""}\n\n核心指标：弹出 ${fmt(total.popup)}，点击 ${fmt(total.click)}，点击率 ${pct(total.clickRate)}，提交订单 ${fmt(total.order)}，成交 ${fmt(total.deal)}，付款完成率 ${pct(total.paymentFinishRate)}。\n\n系统自动复盘：\n1. 聚焦异常：${auto.focus}\n2. 关联动作：${auto.action}\n3. 驱动闭环：${auto.next}\n\n问题素材：共 ${problems.length} 条，重点关注 ${problems.slice(0, 3).map((row) => row.adId).join("、") || "无"}。\n\n优化建议：\n${problems.slice(0, 4).map((row, index) => `${index + 1}. 广告 ${row.adId}：${analysisAdvice(row)}`).join("\n") || "1. 今日整体表现稳定，继续观察高成交素材的人群和表达方式。"}`;
}

const miniChartData = {
  revenue: { color: "#ffffff", values: [96, 104, 101, 112, 118, 114, 128] },
  orders: { color: "#26c281", values: [138, 146, 151, 158, 162, 169, 176] },
  ads: { color: "#ff9f2d", values: [24.2, 25.8, 25.1, 27.6, 26.9, 27.4, 28.4] },
  community: { color: "#7c6dff", values: [31, 34, 37, 35, 39, 41, 42] },
};

function communityMaterialSeed() {
  const fallback = {
    currentDate: "2026-07-08",
    compareDate: "2026-07-07",
    categories: [
      { name: "基金", copyCount: 4, forwardCount: 28, compareCopyCount: 3, compareForwardCount: 23 },
      { name: "升级高端版", copyCount: 5, forwardCount: 41, compareCopyCount: 4, compareForwardCount: 33 },
      { name: "猎手", copyCount: 4, forwardCount: 31, compareCopyCount: 4, compareForwardCount: 35 },
      { name: "中高端续费", copyCount: 6, forwardCount: 48, compareCopyCount: 5, compareForwardCount: 36 },
      { name: "短线王", copyCount: 11, forwardCount: 83, compareCopyCount: 9, compareForwardCount: 71 },
      { name: "选股王", copyCount: 4, forwardCount: 27, compareCopyCount: 3, compareForwardCount: 24 },
    ],
    trend: [27, 29, 31, 30, 32, 33, 34],
  };
  const seed = typeof window !== "undefined" ? window.OPERATION_COMMUNITY_MATERIAL_SEED : null;
  return seed && Array.isArray(seed.categories) && seed.categories.length ? seed : fallback;
}

function renderCommunityOverview() {
  const totalEl = document.querySelector("#communityOverviewTotal");
  const listEl = document.querySelector("#communityOverviewBreakdown");
  if (!totalEl || !listEl) return;
  const data = communityMaterialSeed();
  const categories = data.categories || [];
  const totalCopy = categories.reduce((sum, item) => sum + Number(item.copyCount || 0), 0);
  const totalForward = categories.reduce((sum, item) => sum + Number(item.forwardCount || 0), 0);
  const compareCopy = categories.reduce((sum, item) => sum + Number(item.compareCopyCount || 0), 0);
  const compareForward = categories.reduce((sum, item) => sum + Number(item.compareForwardCount || 0), 0);
  const copyDelta = totalCopy - compareCopy;
  const forwardDelta = totalForward - compareForward;
  const totalDeltaClass = deltaClass(forwardDelta);
  totalEl.innerHTML = `<strong>${fmt(totalCopy)} <small>/ ${fmt(totalForward)}</small></strong><span class="${totalDeltaClass}">环比 ${copyDelta >= 0 ? "+" : ""}${fmt(copyDelta)} 篇 / ${forwardDelta >= 0 ? "+" : ""}${fmt(forwardDelta)} 次</span>`;
  const displayNameMap = { 升级高端版: "新开升级", 猎手: "猎手活动" };
  const order = ["短线王新开", "短线王续费", "新开升级", "选股王", "中高端续费", "猎手活动", "基金"];
  const orderedCategories = [...categories].sort((a, b) => {
    const aName = displayNameMap[a.name] || a.name;
    const bName = displayNameMap[b.name] || b.name;
    const aIndex = order.indexOf(aName);
    const bIndex = order.indexOf(bName);
    return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
  });
  listEl.innerHTML = orderedCategories.map((item) => {
    const displayName = displayNameMap[item.name] || item.name;
    const copyDelta = Number(item.copyCount || 0) - Number(item.compareCopyCount || 0);
    const forwardDelta = Number(item.forwardCount || 0) - Number(item.compareForwardCount || 0);
    return `<div class="community-row"><span>${escapeHtml(displayName)}</span><b>${fmt(item.copyCount)} / ${fmt(item.forwardCount)} <em class="${deltaClass(copyDelta)}">${copyDelta >= 0 ? "+" : ""}${fmt(copyDelta)}</em><em class="${deltaClass(forwardDelta)}">${forwardDelta >= 0 ? "+" : ""}${fmt(forwardDelta)}</em></b></div>`;
  }).join("");
  if (Array.isArray(data.trend) && data.trend.length) {
    miniChartData.community.values = data.trend;
  }
}

function renderMiniChart(container, config) {
  const width = 118;
  const height = 62;
  const pad = 9;
  const values = config.values;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => ({
    x: pad + (index / (values.length - 1)) * (width - pad * 2),
    y: pad + (1 - (value - min) / range) * (height - pad * 2),
  }));
  const line = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const area = `${line} L${points.at(-1).x.toFixed(1)},${height - pad} L${points[0].x.toFixed(1)},${height - pad} Z`;
  const last = points.at(-1);

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <path class="mini-area" d="${area}" fill="${config.color}"></path>
      <path class="mini-line" d="${line}" stroke="${config.color}"></path>
      <circle class="mini-dot" cx="${last.x.toFixed(1)}" cy="${last.y.toFixed(1)}" r="3.4" stroke="${config.color}"></circle>
    </svg>
  `;
}

renderCommunityOverview();

document.querySelectorAll("[data-mini-chart]").forEach((container) => {
  const key = container.dataset.miniChart;
  renderMiniChart(container, miniChartData[key]);
});

activateView(getStoredView(), false);
