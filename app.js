const characters = [
    {
        role: "主角",
        name: "林晓",
        description: "大一女生，性格单纯，有些敏感，家庭条件普通。"
    },
    {
        role: "姐姐",
        name: "林然",
        description: "已经工作，成熟理性，很关心妹妹，关键时刻能看清骗局。"
    },
    {
        role: "室友",
        name: "苏颖",
        description: "林晓室友兼好友，冷静细心，愿意在低谷时陪伴林晓。"
    },
    {
        role: "反派",
        name: "骗子客服",
        description: "利用返利、冻结、征信威胁等话术，一步步加深控制。"
    },
    {
        role: "操盘者",
        name: "群主",
        description: "在兼职群里制造热闹氛围，用截图和话术降低受害者警惕。"
    },
    {
        role: "提醒者",
        name: "警察",
        description: "指出骗局本质，提醒受害者及时报警并保留证据。"
    }
];

const scenes = [
    {
        act: "第一幕：甜头",
        title: "场景一：宿舍 夜",
        tone: "陌生兼职群突然闯入日常",
        summary: "林晓躺在宿舍床上刷手机，一条“抖音点赞兼职，日结 50-300，学生可做”的消息打破了她的平静。群里不断有人晒出到账截图，气氛看起来像是真的。",
        dialogues: [
            ["林晓", "点点赞就能赚钱？这么简单？"],
            ["群主（语音）", "宝子们，今天名额有限啊！做完立刻提现吗？当然可以！"],
            ["群成员A", "刚到账 80！"],
            ["群成员B", "真的能提现！"]
        ],
        clue: "诈骗线索：越是强调“学生可做”“名额有限”，越是在制造低门槛和紧迫感。",
        warning: "反诈提醒：凡是陌生群内发布的轻松高薪兼职，都要先怀疑真实性。",
        emotion: "好奇",
        risk: "诱导试探",
        action: "先核实来源"
    },
    {
        act: "第一幕：甜头",
        title: "场景二：宿舍 连续镜头",
        tone: "小额返利制造信任",
        summary: "林晓按照要求给视频点赞、提交截图，很快就收到了微信转账。短时间内连续几笔到账，让她开始相信这真是一条轻松赚钱的路。",
        dialogues: [
            ["林晓", "真到账了？"],
            ["林晓", "这钱也太好赚了吧。"],
            ["群主", "普通任务收益太低啦，下载 APP 做高级任务，一单赚更多。"],
            ["林晓", "安全吗？"],
            ["群主", "放心，大学生做的特别多。"]
        ],
        clue: "诈骗线索：先给小甜头，是刷单返利诈骗最常见的“养号”步骤。",
        warning: "反诈提醒：前面能提现，不代表后续安全，骗子就是靠前期返利引你入局。",
        emotion: "放松",
        risk: "建立信任",
        action: "不要下载陌生 APP"
    },
    {
        act: "第一幕：甜头",
        title: "场景三：宿舍 深夜",
        tone: "第一次垫付开始失守",
        summary: "高级任务要求先充值 50 元才能开启。林晓本来犹豫，但群里马上出现“不会是诈骗吧”的质疑和大量到账截图。她最终说服自己：50 块而已，就当吃顿饭。",
        dialogues: [
            ["林晓", "还要先交钱……"],
            ["群成员C", "不会是诈骗吧？"],
            ["群主", "做不了别影响别人赚钱。"],
            ["群成员D", "我刚提现 200。"],
            ["林晓", "50 块而已……就当吃顿饭。"],
            ["林晓", "真的赚到了！"]
        ],
        clue: "诈骗线索：只要兼职开始要求你先垫付、充值、做任务升级，本质就变了。",
        warning: "反诈提醒：任何“先交钱再赚钱”的兼职，基本都可以直接判定为诈骗。",
        emotion: "侥幸",
        risk: "首次垫付",
        action: "看到充值立刻退出"
    },
    {
        act: "第二幕：陷阱",
        title: "场景四：第二天 白天",
        tone: "联单返利把人推向更深处",
        summary: "第二天，林晓在教室后排偷偷看手机。骗子客服告诉她已升级为 VIP，可以做高额联单任务，垫付 500 元返利 700 元。她告诉自己“最后再做一次，赚完就退出”，于是转了账。",
        dialogues: [
            ["骗子客服", "恭喜升级 VIP 用户。"],
            ["骗子客服", "现在可以做高额联单任务。"],
            ["林晓（内心）", "最后再做一次……赚完就退出。"],
            ["林晓", "怎么回事？"],
            ["骗子客服", "由于你操作失误，资金被冻结。"]
        ],
        clue: "诈骗线索：所谓“联单”“VIP”“更高收益”是为了放大投入金额。",
        warning: "反诈提醒：骗子常把失败归咎于受害者“操作失误”，从而索要更多钱。",
        emotion: "贪心夹杂不安",
        risk: "金额升级",
        action: "拒绝补单补款"
    },
    {
        act: "第二幕：陷阱",
        title: "场景五：宿舍 傍晚",
        tone: "冻结、征信、贷款威胁齐上阵",
        summary: "林晓盯着账户余额，想着再补一点就能把前面的钱拿回来。骗子持续发来“账户冻结”“信用受限”“需要继续解冻”等消息，甚至用她上传的身份信息恐吓她会影响征信、绑定贷款账户。",
        dialogues: [
            ["林晓", "再补一点……应该就能拿回来了……"],
            ["骗子客服", "检测到你身份信息异常。"],
            ["骗子客服", "若不及时处理，将影响个人征信。"],
            ["林晓", "征信？"],
            ["骗子客服", "你上传的信息已绑定贷款账户，拒不处理后果自负。"]
        ],
        clue: "诈骗线索：一旦出现“冻结”“征信受损”“贷款绑定”等威胁，说明对方开始利用恐惧操控。",
        warning: "反诈提醒：正规平台不会通过私人聊天要求你交“解冻金”或用征信威胁你继续转账。",
        emotion: "恐慌",
        risk: "恐吓施压",
        action: "立即停止沟通"
    },
    {
        act: "第二幕：陷阱",
        title: "场景六：电话通话 夜",
        tone: "谎言开始崩裂",
        summary: "林晓终于撑不住，给姐姐打电话借钱，却不敢说真相。姐姐追问原因，林晓沉默许久，最后带着哭腔承认自己可能被骗了。",
        dialogues: [
            ["姐姐", "喂？怎么了？"],
            ["林晓", "姐……你能借我点钱吗？"],
            ["姐姐", "突然要钱干什么？"],
            ["姐姐", "林晓，你是不是出什么事了？"],
            ["姐姐", "你老实告诉我。"],
            ["林晓", "我……我好像被骗了……"]
        ],
        clue: "求助信号：开始借钱、刻意隐瞒原因，往往说明受害者已深陷骗局。",
        warning: "反诈提醒：当你不敢把事情告诉家人朋友时，更应该尽快求助可信的人。",
        emotion: "崩溃前夜",
        risk: "外借资金",
        action: "立刻向家人坦白"
    },
    {
        act: "第二幕：陷阱",
        title: "场景七：姐姐家 夜",
        tone: "“最后一步”成为心理牢笼",
        summary: "视频通话里，姐姐焦急地劝林晓不要再转钱，指出这就是典型诈骗。可林晓始终放不下已经转出去的钱，不停重复“只差最后一次就能拿回来”。",
        dialogues: [
            ["姐姐", "你现在立刻别再转钱了！"],
            ["林晓", "不是的，他们说只差最后一步……"],
            ["姐姐", "这是典型诈骗！"],
            ["林晓", "可是前面的钱都在里面啊！"],
            ["姐姐", "那也是假的！"],
            ["林晓", "再一次……最后一次就能拿回来……"]
        ],
        clue: "心理陷阱：不甘心沉没成本，是骗子最擅长利用的人性弱点。",
        warning: "反诈提醒：已经转出去的钱越多，越不能再补。继续转只会扩大损失。",
        emotion: "执念",
        risk: "沉没成本",
        action: "接受损失止损"
    },
    {
        act: "第三幕：崩塌",
        title: "场景八：宿舍 深夜",
        tone: "骗局彻底露出真面目",
        summary: "林晓再次转账后，骗子却告诉她账户仍异常，还需要缴纳最终解冻费 8000 元。她呆住了，翻开银行卡余额，几乎已经空空如也，这一刻她终于意识到自己被骗了。",
        dialogues: [
            ["骗子客服", "账户仍异常，需要缴纳最终解冻费 8000 元。"],
            ["林晓", "还要交？"],
            ["骗子客服", "若不处理，资金永久冻结。"]
        ],
        clue: "诈骗线索：所谓“最终”“最后一步”“最后一次”，本质都是无止境地继续榨取。",
        warning: "反诈提醒：当你意识到自己被骗时，最重要的不是追回幻想中的返利，而是立刻保全证据。",
        emotion: "醒悟",
        risk: "资金见底",
        action: "截图留证报警"
    },
    {
        act: "第三幕：崩塌",
        title: "场景九：宿舍 凌晨",
        tone: "情绪崩塌后的黑夜",
        summary: "没有灯的宿舍里，林晓蜷缩在床角，耳边不断回响“最后一步”“账户冻结”“影响征信”等话。她捂住耳朵，终于失声痛哭。",
        dialogues: [
            ["回响", "最后一步……"],
            ["回响", "账户冻结……"],
            ["回响", "影响征信……"],
            ["林晓", "……"]
        ],
        clue: "受害体验：诈骗不仅带来经济损失，还会造成强烈羞耻、自责和心理压力。",
        warning: "反诈提醒：被骗不是因为你笨，而是骗子长期针对人性的弱点进行设计。",
        emotion: "自责",
        risk: "情绪失控",
        action: "尽快寻求陪伴"
    },
    {
        act: "第三幕：崩塌",
        title: "场景十：宿舍楼走廊 早晨",
        tone: "被接住，才有力气转身",
        summary: "第二天早晨，林晓蹲在走廊角落哭泣。室友苏颖路过后停下脚步，耐心听她把事情说完，没有责怪，只是告诉她：你不是第一个被骗的人，现在最重要的是报警，我陪你去。",
        dialogues: [
            ["苏颖", "林晓？"],
            ["苏颖", "到底发生什么了？"],
            ["林晓", "我是不是特别蠢……"],
            ["苏颖", "不是，是他们太会骗人了。"],
            ["苏颖", "现在最重要的是报警。"],
            ["苏颖", "我陪你去。"]
        ],
        clue: "止损转折：被理解、被陪伴，是受害者从骗局控制中走出来的重要一步。",
        warning: "反诈提醒：如果身边有人被骗，先陪伴、先止损、再处理，不要先指责。",
        emotion: "被理解",
        risk: "开始止损",
        action: "找人陪同报警"
    },
    {
        act: "第四幕：警察局",
        title: "场景十一：警察局 白天",
        tone: "看清骗局，也把警示留给更多人",
        summary: "警察一边登记信息，一边向林晓说明：这种刷单返利诈骗，最近很多大学生都遇到过。骗子利用的不是智商，而是人的侥幸、贪念，还有不甘心。剧情最后回到空荡的宿舍和反诈海报，提醒每一个屏幕前的人：刷单返利都是诈骗。",
        dialogues: [
            ["警察", "这种刷单返利诈骗，最近很多大学生都遇到过。"],
            ["警察", "记住，所有“先垫付再返利”的兼职，基本都是诈骗。"],
            ["林晓", "我以为自己不会被骗……"],
            ["警察", "骗子利用的不是智商，而是人的侥幸、贪念，还有不甘心。"],
            ["旁白", "当你以为自己离成功只差最后一步时，其实早已掉进深渊。"]
        ],
        clue: "结尾警示：骗局的核心不是技术多高，而是先给甜头，再用沉没成本锁住你。",
        warning: "终极提醒：刷单返利都是诈骗，谨防网络兼职骗局，如遇诈骗请立即报警。",
        emotion: "警醒",
        risk: "终止诈骗",
        action: "向更多人传播"
    }
];

const state = {
    currentScene: Math.min(
        Math.max(Number.parseInt(localStorage.getItem("last-step-scene") || "0", 10), 0),
        scenes.length - 1
    ),
    autoplay: false,
    autoplayTimer: null,
    deferredPrompt: null
};

const elements = {
    characterGrid: document.getElementById("characterGrid"),
    timeline: document.getElementById("timeline"),
    sceneCounter: document.getElementById("sceneCounter"),
    sceneAct: document.getElementById("sceneAct"),
    sceneLocation: document.getElementById("sceneLocation"),
    sceneTone: document.getElementById("sceneTone"),
    sceneTitle: document.getElementById("sceneTitle"),
    sceneSummary: document.getElementById("sceneSummary"),
    dialogueList: document.getElementById("dialogueList"),
    sceneClue: document.getElementById("sceneClue"),
    sceneWarning: document.getElementById("sceneWarning"),
    statusEmotion: document.getElementById("statusEmotion"),
    statusRisk: document.getElementById("statusRisk"),
    statusAction: document.getElementById("statusAction"),
    playToggle: document.getElementById("playToggle"),
    installButton: document.getElementById("installButton"),
    installTip: document.getElementById("installTip"),
    restartButton: document.getElementById("restartButton"),
    prevButton: document.getElementById("prevButton"),
    nextButton: document.getElementById("nextButton"),
    copyButton: document.getElementById("copyButton"),
    jumpEndButton: document.getElementById("jumpEndButton"),
    showChecklistButton: document.getElementById("showChecklistButton"),
    toast: document.getElementById("toast")
};

function renderCharacters() {
    elements.characterGrid.innerHTML = characters
        .map(
            (character) => `
                <article class="character-card">
                    <span class="character-role">${character.role}</span>
                    <h3>${character.name}</h3>
                    <p>${character.description}</p>
                </article>
            `
        )
        .join("");
}

function renderTimeline() {
    elements.timeline.innerHTML = scenes
        .map(
            (scene, index) => `
                <button type="button" data-scene-index="${index}" class="${index === state.currentScene ? "active" : ""}">
                    ${index + 1}
                </button>
            `
        )
        .join("");
}

function renderScene() {
    const scene = scenes[state.currentScene];
    elements.sceneCounter.textContent = `第 ${state.currentScene + 1} / ${scenes.length} 场`;
    elements.sceneAct.textContent = scene.act;
    elements.sceneLocation.textContent = scene.title;
    elements.sceneTone.textContent = scene.tone;
    elements.sceneTitle.textContent = scene.title;
    elements.sceneSummary.textContent = scene.summary;
    elements.sceneClue.textContent = scene.clue;
    elements.sceneWarning.textContent = scene.warning;
    elements.statusEmotion.textContent = scene.emotion;
    elements.statusRisk.textContent = scene.risk;
    elements.statusAction.textContent = scene.action;
    elements.dialogueList.innerHTML = scene.dialogues
        .map(
            ([speaker, line]) => `
                <article class="dialogue">
                    <strong>${speaker}</strong>
                    <p>${line}</p>
                </article>
            `
        )
        .join("");

    localStorage.setItem("last-step-scene", String(state.currentScene));
    renderTimeline();
}

function setScene(index, options = {}) {
    const nextIndex = Math.min(Math.max(index, 0), scenes.length - 1);
    state.currentScene = nextIndex;
    renderScene();

    if (!options.silentScroll) {
        document.getElementById("sceneCard").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
}

function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
        elements.toast.classList.remove("show");
    }, 2200);
}

function toggleAutoplay() {
    state.autoplay = !state.autoplay;
    elements.playToggle.textContent = state.autoplay ? "停止放映" : "自动放映";

    if (!state.autoplay) {
        window.clearInterval(state.autoplayTimer);
        state.autoplayTimer = null;
        showToast("已停止自动放映");
        return;
    }

    showToast("开始自动放映");
    state.autoplayTimer = window.setInterval(() => {
        if (state.currentScene >= scenes.length - 1) {
            toggleAutoplay();
            return;
        }
        setScene(state.currentScene + 1);
    }, 7000);
}

async function installApp() {
    if (state.deferredPrompt) {
        state.deferredPrompt.prompt();
        const result = await state.deferredPrompt.userChoice;
        if (result.outcome === "accepted") {
            showToast("应用正在添加到桌面");
        }
        state.deferredPrompt = null;
        elements.installButton.hidden = true;
        return;
    }

    showToast("请在浏览器菜单中选择“安装应用”或“添加到主屏幕”");
}

async function copyChecklist() {
    const checklist = [
        "反诈报警清单",
        "1. 立即停止转账，不再继续补单或解冻。",
        "2. 保留聊天记录、转账记录、APP 页面截图、对方账号。",
        "3. 尽快拨打 110 或 96110。",
        "4. 告知家人、老师、辅导员或朋友，避免独自承受。"
    ].join("\n");

    try {
        await navigator.clipboard.writeText(checklist);
        showToast("报警清单已复制");
    } catch (error) {
        showToast("复制失败，请手动截图保存");
    }
}

function bindEvents() {
    elements.timeline.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-scene-index]");
        if (!button) {
            return;
        }
        setScene(Number(button.dataset.sceneIndex));
    });

    elements.playToggle.addEventListener("click", toggleAutoplay);
    elements.installButton.addEventListener("click", installApp);
    elements.restartButton.addEventListener("click", () => {
        setScene(0);
        if (!state.autoplay) {
            showToast("已回到第一场");
        }
    });
    elements.prevButton.addEventListener("click", () => setScene(state.currentScene - 1));
    elements.nextButton.addEventListener("click", () => setScene(state.currentScene + 1));
    elements.copyButton.addEventListener("click", copyChecklist);
    elements.jumpEndButton.addEventListener("click", () => setScene(scenes.length - 1));
    elements.showChecklistButton.addEventListener("click", copyChecklist);

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        state.deferredPrompt = event;
        elements.installButton.hidden = false;
        elements.installTip.textContent = "检测到可安装环境，点击“下载安装到手机”即可保存到桌面。";
    });

    window.addEventListener("appinstalled", () => {
        showToast("安装完成，已可从桌面打开");
        elements.installButton.hidden = true;
    });
}

async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    try {
        await navigator.serviceWorker.register("./service-worker.js");
    } catch (error) {
        console.error("Service worker register failed:", error);
    }
}

function init() {
    renderCharacters();
    renderTimeline();
    renderScene();
    bindEvents();
    registerServiceWorker();
}

init();
