const titles = {
  overview: "工作台首页",
  project: "项目管理",
  activity: "营销活动",
  knowledge: "知识库",
  content: "内容创作",
  campaign: "广告计划 / 执行",
  report: "数据中心",
  workflow: "风控监测",
  team: "权限管理",
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
};

const navButtons = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const pageTitle = document.querySelector("#pageTitle");
const heroTitle = document.querySelector("#heroTitle");
const heroDescription = document.querySelector("#heroDescription");
const workflowTitle = document.querySelector("#workflowTitle");
const workflowSteps = document.querySelector("#workflowSteps");

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

setPageCopy("overview");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;

    navButtons.forEach((item) => item.classList.toggle("active", item === button));
    views.forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
    setPageCopy(view);
    if (view === "report") renderDataCenter();
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

const AUTO_CONFIG_KEY = "operation-center-ad-automation-config";
const AUTO_TASK_KEY = "operation-center-ad-automation-tasks";
const AUTO_RUN_KEY = "operation-center-ad-automation-runs";
const AUTO_MEMORY_KEY = "operation-center-ad-automation-memories";

const projectOptions = [
  { name: "短线王新开", groupId: 7 },
  { name: "短线王续费", groupId: 27 },
  { name: "新开升级", groupId: 63 },
  { name: "选股王", groupId: 81 },
  { name: "中高端续费", groupId: 48 },
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
  $("automationHelperState").classList.add("ok");
  $("automationHelperState").textContent = "演示模式";
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
    values: [54, 72, 48, 84, 65, 78, 58],
    trends: [
      ["续费承接", "稳定提升，今日重点盯短线王续费与中高端续费"],
      ["社群触达", "早报和纪律已准备，盘后播报等收盘数据"],
      ["投放效率", "App/PC 弹窗需进入换图策略复盘"],
    ],
  },
  month: {
    labels: ["1周", "2周", "3周", "4周", "5周", "6周"],
    values: [62, 69, 76, 71, 88, 93],
    trends: [
      ["月度承接", "整体向上，但新开升级转化效率需要单独拆解"],
      ["内容节奏", "社群内容产出稳定，引用数据需要接入素材管理"],
      ["投放复盘", "月内低效素材集中在晚间弹窗时段"],
    ],
  },
};

const lineSeries = [
  {
    name: "续费承接",
    color: "#1976ff",
    values: [48, 56, 53, 71, 77, 82, 86],
  },
  {
    name: "内容触达",
    color: "#26c281",
    values: [42, 46, 61, 58, 67, 72, 74],
  },
  {
    name: "投放效率",
    color: "#ff9f2d",
    values: [36, 44, 39, 48, 57, 62, 69],
  },
];

let lineOffset = 0;

function renderBarChart(period = "week") {
  const chart = document.querySelector("#operationBarChart");
  const data = periodData[period];
  const max = Math.max(...data.values);

  chart.innerHTML = data.values
    .map((value, index) => {
      const height = Math.max(16, Math.round((value / max) * 132));
      return `
        <div class="bar-col">
          <span style="--h: ${height}px" data-value="${value}"></span>
          <em>${data.labels[index]}</em>
        </div>
      `;
    })
    .join("");

  const [main, second, third] = data.trends;
  document.querySelector("#trendMainTitle").textContent = main[0];
  document.querySelector("#trendMainText").textContent = main[1];
  document.querySelector("#trendSecondTitle").textContent = second[0];
  document.querySelector("#trendSecondText").textContent = second[1];
  document.querySelector("#trendThirdTitle").textContent = third[0];
  document.querySelector("#trendThirdText").textContent = third[1];
}

function pointsToPath(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ");
}

function renderLineChart() {
  const svg = document.querySelector("#productLineChart");
  if (!svg) return;

  const width = 520;
  const height = 210;
  const padding = { top: 24, right: 26, bottom: 34, left: 34 };
  const labels = ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"];
  const series = lineSeries.map((item, index) => ({
    ...item,
    values: item.values.map((value, valueIndex) => {
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
    .map((item) => {
      const points = item.values.map((value, index) => ({ x: xFor(index), y: yFor(value), value }));
      const linePath = pointsToPath(points);
      const areaPath = `${linePath} L${points.at(-1).x},${height - padding.bottom} L${points[0].x},${height - padding.bottom} Z`;
      const pointMarkup = points
        .map((point) => `<circle class="chart-point" cx="${point.x}" cy="${point.y}" r="4" stroke="${item.color}" />`)
        .join("");
      const last = points.at(-1);
      return `
        <path class="chart-area" d="${areaPath}" fill="${item.color}"></path>
        <path class="chart-line" d="${linePath}" stroke="${item.color}"></path>
        ${pointMarkup}
        <text class="chart-value-label" x="${last.x - 8}" y="${last.y - 12}" text-anchor="end">${item.name}</text>
      `;
    })
    .join("");

  svg.innerHTML = `${grid}${labelMarkup}${lines}`;
}

document.querySelectorAll("#chartPeriod button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#chartPeriod button").forEach((item) => item.classList.toggle("active", item === button));
    renderBarChart(button.dataset.period);
  });
});

document.querySelector("#shuffleLineChart")?.addEventListener("click", () => {
  lineOffset += 1;
  renderLineChart();
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

let analysisRows = loadStoredAnalysisRows() || [
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
  const cls = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
  const arrow = diff > 0 ? "↑" : diff < 0 ? "↓" : "→";
  const text = type === "pct" ? `${arrow} ${Math.abs(diff).toFixed(1)}%` : `${arrow} ${Math.abs(diff).toFixed(1)}%`;
  return `<span class="analysis-delta ${cls}">${text}</span>`;
}

function kpiHtml(label, value, sub, key, current, previous, type = "number") {
  const display = type === "pct" ? pct(value) : fmt(value);
  return `<div class="analysis-kpi"><span>${label}</span>${metricDelta(current[key], previous?.[key], type)}<strong>${display}</strong><em>${sub}</em></div>`;
}

function currentAnalysisFilters() {
  return {
    project: document.querySelector("#analysisProject")?.value || "短线王续费",
    date: document.querySelector("#analysisDate")?.value || "2026-07-08",
    compareDate: document.querySelector("#analysisCompareDate")?.value || "2026-07-07",
    channel: document.querySelector("#analysisChannel")?.value || "ALL",
    threshold: Number(document.querySelector("#analysisPopupThreshold")?.value || 1000),
  };
}

function filteredAnalysisRows(date) {
  const filters = currentAnalysisFilters();
  return analysisRows.filter((row) => row.date === date && row.project === filters.project && (filters.channel === "ALL" || row.channel === filters.channel));
}

function saveAnalysisRows() {
  localStorage.setItem("operation-center-analysis-rows", JSON.stringify(analysisRows));
}

function setAnalysisUpdateStatus(text, type = "") {
  const status = document.querySelector("#analysisUpdateStatus");
  if (!status) return;
  status.textContent = text;
  status.className = `analysis-update-status ${type}`.trim();
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
    groupId: project?.groupId || "",
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
      analysisRows = analysisRows.filter((row) => !(row.project === projectName && replaceDates.has(row.date)));
      analysisRows.push(...normalized);
      saveAnalysisRows();
    }

    setAnalysisUpdateStatus(`「${projectName}」更新完成：${json.status?.message || "已同步后台数据"}`, "ok");
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
  dateEl.innerHTML = dates.map((date) => `<option value="${date}">${date}</option>`).join("");
  compareEl.innerHTML = dates.map((date, index) => `<option value="${date}" ${index === 1 ? "selected" : ""}>${date}</option>`).join("");
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
  document.querySelector("#analysisDateNote").textContent = `${filters.project}｜${filters.date} 对比 ${filters.compareDate}｜${filters.channel === "ALL" ? "APP+PC全部" : filters.channel}`;

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

  document.querySelector("#analysisChannelTable").innerHTML = `<tr><th>渠道/分组</th><th class="num">广告数</th><th class="num">弹出</th><th class="num">点击</th><th class="num">点击率</th><th class="num">成交</th><th class="num">付款完成率</th></tr>` +
    groupAnalysisRows(rows, (row) => row.channel).map((group) => `<tr><td>${escapeHtml(group.name)}<br><span class="analysis-tag">${escapeHtml(filters.project)}</span></td><td class="num">${fmt(group.adCount)}</td><td class="num">${fmt(group.popup)}</td><td class="num">${fmt(group.click)}</td><td class="num">${pct(group.clickRate)}</td><td class="num">${fmt(group.deal)}</td><td class="num">${pct(group.paymentFinishRate)}</td></tr>`).join("");

  document.querySelector("#analysisAudienceTable").innerHTML = `<tr><th>命中人群</th><th class="num">广告数</th><th class="num">问题素材</th><th class="num">弹出</th><th class="num">点击</th><th class="num">点击率</th><th class="num">成交</th><th class="num">付款完成率</th></tr>` +
    groupAnalysisRows(rows, (row) => row.audience).map((group) => `<tr><td>${escapeHtml(group.name)}</td><td class="num">${fmt(group.adCount)}</td><td class="num">${fmt(problemRows(group.rows).length)}</td><td class="num">${fmt(group.popup)}</td><td class="num">${fmt(group.click)}</td><td class="num">${pct(group.clickRate)}</td><td class="num">${fmt(group.deal)}</td><td class="num">${pct(group.paymentFinishRate)}</td></tr>`).join("");

  document.querySelector("#analysisProblemCount").textContent = `共 ${problems.length} 条，显示 TOP ${Math.min(5, problems.length)} 条`;
  document.querySelector("#analysisProblemTable").innerHTML = `<tr><th>素材</th><th>广告ID</th><th>渠道</th><th>命中人群</th><th class="num">弹出</th><th class="num">点击率</th><th class="num">成交</th><th>问题标签</th><th>建议</th><th>待办</th></tr>` +
    problems.slice(0, 5).map((row) => `<tr><td><div class="analysis-material">${escapeHtml(row.material)}</div></td><td>${row.adId}</td><td>${row.channel}</td><td>${escapeHtml(row.audience)}</td><td class="num">${fmt(row.popup)}</td><td class="num">${pct(row.clickRate)}</td><td class="num">${fmt(row.deal)}</td><td>${rowTags(row).map((tag) => `<span class="analysis-tag ${tag === "素材可复用" ? "" : row.clickRate < 2 || row.deal === 0 ? "up" : "down"}">${escapeHtml(tag)}</span>`).join("")}</td><td>${escapeHtml(analysisAdvice(row))}</td><td><button class="text-button" type="button">加入待办</button></td></tr>`).join("");

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
  return `【${filters.project} 日报】\n日期：${filters.date}\n口径：${filters.channel === "ALL" ? "APP+PC全部" : filters.channel}\n\n核心指标：弹出 ${fmt(total.popup)}，点击 ${fmt(total.click)}，点击率 ${pct(total.clickRate)}，提交订单 ${fmt(total.order)}，成交 ${fmt(total.deal)}，付款完成率 ${pct(total.paymentFinishRate)}。\n\n系统自动复盘：\n1. 聚焦异常：${auto.focus}\n2. 关联动作：${auto.action}\n3. 驱动闭环：${auto.next}\n\n问题素材：共 ${problems.length} 条，重点关注 ${problems.slice(0, 3).map((row) => row.adId).join("、") || "无"}。\n\n优化建议：\n${problems.slice(0, 4).map((row, index) => `${index + 1}. 广告 ${row.adId}：${analysisAdvice(row)}`).join("\n") || "1. 今日整体表现稳定，继续观察高成交素材的人群和表达方式。"}`;
}

const miniChartData = {
  revenue: { color: "#ffffff", values: [96, 104, 101, 112, 118, 114, 128] },
  orders: { color: "#26c281", values: [138, 146, 151, 158, 162, 169, 176] },
  ads: { color: "#ff9f2d", values: [24.2, 25.8, 25.1, 27.6, 26.9, 27.4, 28.4] },
  community: { color: "#7c6dff", values: [31, 34, 37, 35, 39, 41, 42] },
};

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

document.querySelectorAll("[data-mini-chart]").forEach((container) => {
  const key = container.dataset.miniChart;
  renderMiniChart(container, miniChartData[key]);
});
