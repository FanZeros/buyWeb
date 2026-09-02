// ===== 商品数据 =====
// price 统一为原价（捐款兑换所需金额）
const shopItems = [
    // 魔塔地牢系列
    { series: "dungeon", name: "魔塔地牢新手支持包", desc: "地牢探险者*3天 + 15000灵魂 + 100地牢碎片（限购一次）", price: 12, redeemable: true, details: "获得「地牢探险者」*3天 + 15000灵魂 + 100地牢碎片\n「地牢探险者」生效期间：灵魂获得×2，并且每日获得12地牢碎片" },
    { series: "dungeon", name: "魔塔地牢-浅水沼泽DLC", desc: "解锁隐藏第六区域：浅水沼泽", price: 8, redeemable: true, details: "增加隐藏的第六区域：浅水沼泽\n拯救被魔王控制的远古龙，解锁强大的远古水晶，获得更多奖励！\n（最新版本才可以使用）" },
    { series: "dungeon", name: "地牢探险者时长卡", desc: "灵魂获得×2 + 每日12碎片，薛定谔迷宫离线收益翻倍", price: "", redeemable: true, subItems: [
        { name: "周卡【7天】", desc: "80碎片 + 7日时长", price: 7.20 },
        { name: "月卡【30天】", desc: "360碎片 + 30日时长", price: 25 },
        { name: "永久卡", desc: "10000碎片 + 10000天时长", price: 125 },
    ], details: "「地牢探险者」生效期间：灵魂获得×2（与其他倍率累乘）+ 每日12碎片\n薛定谔迷宫：离线收益2倍 & 最长从2h→24h\n多次购买总时长相加，每日奖励不叠加" },
    { series: "dungeon", name: "魔塔地牢-基础组合包", desc: "装备栏×3 + 三件强力装备 + 永久钥匙包", price: 25, redeemable: true, details: "兑换码包含以下物品：\n1. 装备栏：额外装备栏×3个\n2. 装备：破魔刀【破防20%】\n3. 装备：隐形护盾【极限锁血】\n4. 装备：双刀【攻击伤害+60%】\n5. 钥匙包：黄钥匙×4 + 蓝钥匙×1\n\n仅可在【魔塔地牢系列】使用（6勇者、魔塔勇者刺客篇/骑士篇请勿购买）" },
    { series: "dungeon", name: "Steam奖励获得礼包【手机端用】", desc: "【Steam游戏本体】手机端获取Steam专属奖励", price: 15, redeemable: true, details: "没买电脑版（Steam）但想拿到Steam购买的专属奖励？直接购买兑换！\n包含：\n① 6000灵魂\n② 游戏内200%的灵魂获取，永久\n③ 蒸汽戒指【Ex】，永久\n④ 魔王的宝藏DLC直接获得\n⑤ 自定义种子功能\n⑥ 龙年限定：红龙坐骑\n⑦ 版本追加奖励（自动补领之前版本奖励450+碎片）\n\n已购买Steam魔塔地牢游戏请勿再购买此商品（已包含）！" },
    { series: "dungeon", name: "永久自选机会", desc: "额外自选技能/装备个数，通关后可用，可多次叠加", price: "", redeemable: true, subItems: [
        { name: "永久自选+1", desc: "额外+1个", price: 14.44 },
        { name: "永久自选+4", desc: "额外+4个", price: 55.55 },
        { name: "永久自选+10", desc: "额外+10个", price: 133.32 },
    ] },
    { series: "dungeon", name: "购买定制技能装备", desc: "无需消耗自选点数，购买后菜单一键兑换。点卡片进入定制商店选购", price: "60起", redeemable: true, link: "http://zeros.group/dz/" },
    { series: "dungeon", name: "支持者包【角色+DLC】", desc: "解锁全部35+角色 + 7个DLC + 初始奖励15级 + 游戏CG解锁", price: 40.88, redeemable: true, details: "【角色直接解锁】刺客、魔法师、召唤师、亡灵术士、骑士、光明之魂、昆仑仙女、牧师、夜行义贼、九州帝皇、占卜师、圣女、公会主席、妖狐、文脉传承者、道法使徒、亚斯、森之精灵、狂战士、魔法少女、追光剑士、商人、炼金术师、乐子仙人、狩魔人、堕天幻剑、吸血鬼、沙漠猎人、空桑掌门、百花谷主、界青暗主、记录员、试验机器人一号、幻想召唤师、血之舞 + 后续新角色\n【DLC直接解锁】初始装备宝箱、额外BOSS地图、困难系数、技能树模式、天空之城、火山内部、极寒之地\n【初始奖励】等级解锁至15级\n【游戏CG解锁】剑士_王国冒险者、刺客_屋檐隐狼、魔法师_秘法前召、召唤师_月夜兔兔/密林环蛇、亡灵术士_塔楼幽灵、光明之魂_史莱姆剑、牧师_教堂绿影、圣女_圣神之剑、占卜师_星空占卜、工会主席_枪械精通/夜雪奋战、妖狐_草地暖阳/雪夜冷狐 等" },
    { series: "dungeon", name: "大力支持礼包", desc: "一次发电永久使用！9万灵魂+角色+DLC+钥匙包+装备栏×3+强力装备+内测资格+致谢名单", price: 48.88, redeemable: true, details: "仅可在【魔塔地牢系列 + 薛定谔迷宫】中使用，此兑换码无法在6勇者系列使用！\n\n1. 灵魂×90000\n2. 角色解锁：光明之魂、昆仑仙女、夜行义贼、牧师、九州帝皇、占卜师\n3. 游戏DLC：魔王的宝藏、天空之城、额外BOSS大地图、困难模式、自定义种子功能\n4. 永久钥匙包：蓝钥匙×1 + 黄钥匙×4（每局需点击一键兑换）\n5. 装备栏永久解锁×3（提前解锁）\n6. 三件强力装备：破魔刀、隐形护盾、双刀\n7. Zeros游戏内测资格\n\n额外追加：\n· 加入游戏致谢名单\n· 黑暗能量5w（用于升级黑化角色能力）\n· 额外角色兑换码追加\n\n以及之后可能补充的其他奖励" },
    { series: "dungeon", name: "强力支持包【全内容】", desc: "一次发电永久使用！月卡+永久双倍灵魂+钥匙包+装备+全角色+全DLC+CG+9万灵魂+内测资格", price: 98.88, redeemable: true, details: "一次对作者开发游戏的强力支持，一次发电永久使用！\n仅可在【魔塔地牢系列 + 薛定谔迷宫】中使用\n\n1.「地牢探险者」月卡：360碎片 + 30日时长，灵魂×2 + 每日12碎片，薛定谔迷宫2倍离线收益&最长24h\n2. 永久双倍灵魂获取（月卡期间为4倍）注：与Steam购买的双倍不叠加\n3. 永久钥匙包：蓝钥匙×1 + 黄钥匙×4（每局需点击一键兑换）\n4. 永久强力装备 + 装备栏×3：蒸汽戒指[Ex]、双刀、破魔刀、隐形护盾、发光的金色白菜、m60pro、龙年限定红龙坐骑\n5. 全角色直接解锁：刺客/魔法师/召唤师/亡灵术士/骑士/光明之魂/昆仑仙女/牧师/夜行义贼/九州帝皇/占卜师/圣女/公会主席/妖狐/文脉传承者/道法使徒/亚斯/森之精灵/狂战士/魔法少女/追光剑士/商人/炼金术师/乐子仙人/狩魔人/堕天幻剑/吸血鬼...（含所有角色，新角色一个月内追加）\n6. 全DLC解锁：初始装备宝箱、额外BOSS地图、困难系数、技能树模式、天空之城、火山内部、极寒之地、浅水沼泽\n7. 初始奖励等级解锁至15级\n8. 游戏CG全部解锁（14张）\n9. 九万灵魂\n10. 游戏内测资格\n11. 版本追加奖励自动补领（450+碎片）\n\n以及之后可能补充的其他奖励" },


    // 魔塔勇者系列
    { series: "hero", name: "勇者钻石包", desc: "600钻石兑换码，可购买新角色、钥匙及装备", price: 7.88, redeemable: true, details: "包含600钻石的兑换码\n可用于购买新角色、钥匙以及装备\n仅限在游戏《魔勇亡灵术士》《魔塔勇者xx篇》和《魔塔与6勇者》使用\n需要联网使用兑换码" },
    { series: "hero", name: "勇者钻石箱", desc: "1888钻石兑换码 + Zeros游戏内测资格", price: 22.88, redeemable: true, details: "1. 包含1888钻石的兑换码\n2. Zeros游戏内测资格（加入游戏内测群）\n仅限在游戏《魔勇亡灵术士》《魔塔勇者xx篇》和《魔塔与6勇者》使用\n需要联网使用兑换码" },
    { series: "hero", name: "勇者钻石矿", desc: "3250钻石兑换码 + Zeros游戏内测资格", price: 38.88, redeemable: true, details: "1. 包含3250钻石的兑换码，可用于购买新角色、钥匙以及装备\n2. Zeros游戏内测资格（加入游戏内测群）\n仅限在游戏《魔勇亡灵术士》《魔塔勇者xx篇》和《魔塔与6勇者》使用\n需要联网使用兑换码" },
    { series: "hero", name: "勇者钻石柜", desc: "6880钻石兑换码 + Zeros游戏内测资格 + 游戏致谢名单", price: 78.88, redeemable: true, details: "1. 包含6880钻石的兑换码，可用于购买新角色、钥匙以及装备\n2. Zeros游戏内测资格（加入游戏内测群）\n3. 加入游戏致谢名单\n仅限在游戏《魔勇亡灵术士》《魔塔勇者xx篇》和《魔塔与6勇者》使用\n需要联网使用兑换码" },

    // 转生魔塔系列
    { series: "reborn", name: "600*神魔水晶【10抽】+6电量", desc: "基础抽卡礼包，附赠6点电量", price: 6, redeemable: true },
    { series: "reborn", name: "2550*神魔水晶【42抽】+25电量", desc: "超值抽卡礼包，附赠25点电量", price: 25, redeemable: true },
    { series: "reborn", name: "8000*神魔水晶【133抽】+78电量", desc: "豪华抽卡礼包，附赠78点电量", price: 78, redeemable: true },
    { series: "reborn", name: "19500*神魔水晶【325抽】+188电量", desc: "至尊抽卡礼包，附赠188点电量", price: 188, redeemable: true },


    // Steam激活码（同时归属对应游戏系列 + 激活码分类）
    { series: "dungeon", tags: ["dungeon", "steam"], name: "魔塔地牢 Steam激活码", desc: "Steam游戏激活码兑换", price: 15, redeemable: true },
    { series: "dungeon", tags: ["dungeon", "steam"], name: "薛定谔迷宫 Steam激活码", desc: "Steam游戏激活码兑换", price: 11.88, redeemable: true },
    { series: "reborn", tags: ["reborn", "steam"], name: "转生魔塔 Steam激活码", desc: "Steam游戏激活码兑换", price: 18, redeemable: true },

    // 其他系列
    { series: "other", name: "敬请期待", desc: "更多内容筹备中...", price: "", redeemable: false },
];

const seriesNames = {
    dungeon: "魔塔地牢",
    hero: "魔塔勇者",
    reborn: "转生魔塔",
    steam: "激活码",
    other: "其他系列"
};

// ===== 系列说明 =====
const seriesDescriptions = {
    dungeon: "包含：地牢C/魔塔地牢2、薛定谔迷宫、魔塔地牢角色外传、拾取宝石1/2",
    hero: "包含：魔塔与6勇者、魔勇亡灵术士、魔塔勇者xx篇",
    reborn: "包含：转生魔塔",
    steam: "Zeros游戏 Steam 平台激活码",
};

// ===== 标签切换 =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabName) {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    const btn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    if (btn) btn.classList.add('active');
    const content = document.getElementById(tabName);
    if (content) content.classList.add('active');
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ===== 商品筛选 =====
const filterBtns = document.querySelectorAll('.filter-btn');
const shopGrid = document.getElementById('shopGrid');

function formatPrice(price) {
    if (!price && price !== 0) return '';
    if (typeof price === 'string') return `<span class="donate-icon">&#9829;</span> ${price}`;
    return `<span class="donate-icon">&#9829;</span> ${price}`;
}

function parsePrice(price) {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
        const n = parseFloat(price);
        return isNaN(n) ? 0 : n;
    }
    return 0;
}

function itemKey(index, subIndex) {
    return subIndex === undefined ? String(index) : index + '-' + subIndex;
}

const selectedKeys = new Set();

function isSelected(index, subIndex) {
    return selectedKeys.has(itemKey(index, subIndex));
}

function toggleSelected(index, subIndex) {
    const key = itemKey(index, subIndex);
    if (selectedKeys.has(key)) selectedKeys.delete(key);
    else selectedKeys.add(key);
    updatePickBar();
    syncSelectedClass();
}

function getSelectedList() {
    const list = [];
    selectedKeys.forEach(key => {
        const parts = key.split('-');
        const index = parseInt(parts[0], 10);
        const item = shopItems[index];
        if (!item) return;
        if (parts[1] !== undefined) {
            const sub = item.subItems && item.subItems[parseInt(parts[1], 10)];
            if (sub) list.push({ name: sub.name, price: sub.price });
        } else {
            list.push({ name: item.name, price: item.price });
        }
    });
    return list;
}

function updatePickBar() {
    const list = getSelectedList();
    const pickBar = document.getElementById('pickBar');
    const pickNames = document.getElementById('pickNames');
    const pickCount = document.getElementById('pickCount');
    const pickTotal = document.getElementById('pickTotal');
    const pickSummary = document.getElementById('pickSummary');
    const pickSummaryText = document.getElementById('pickSummaryText');
    if (list.length === 0) {
        pickBar.classList.remove('visible');
        document.body.classList.remove('has-pick');
        pickSummary.classList.add('hidden');
        return;
    }
    const total = list.reduce((sum, it) => sum + parsePrice(it.price), 0);
    const hasFrom = list.some(it => typeof it.price === 'string' && it.price.indexOf('起') !== -1);
    const totalText = hasFrom ? total.toFixed(2).replace(/\.00$/, '') + '起' : Number(total.toFixed(2));
    pickNames.textContent = list.map(it => it.name).join(' · ');
    pickCount.textContent = String(list.length);
    pickTotal.innerHTML = formatPrice(totalText);
    pickBar.classList.add('visible');
    document.body.classList.add('has-pick');
    pickSummary.classList.remove('hidden');
    pickSummaryText.innerHTML = list.map(it => it.name).join(' · ') + '<br>需捐款 ' + formatPrice(totalText);
}

function syncSelectedClass() {
    shopGrid.querySelectorAll('[data-pick]').forEach(el => {
        el.classList.toggle('selected', selectedKeys.has(el.dataset.pick));
    });
}

function renderShop(series) {
    const items = series === 'all'
        ? shopItems.map((item, index) => ({ item, index }))
        : shopItems.map((item, index) => ({ item, index }))
            .filter(({ item }) => item.series === series || (item.tags && item.tags.includes(series)));
    shopGrid.innerHTML = items.map(({ item, index }) => `
        <div class="shop-item ${item.subItems ? 'has-subitems' : ''} ${item.link ? 'external' : 'selectable'}" data-series="${item.series}" data-index="${index}" ${item.link || item.subItems ? '' : `data-pick="${index}"`}>
            <span class="item-series">${seriesNames[item.series]}</span>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            ${item.subItems ? `<div class="sub-items">${item.subItems.map((sub, subIndex) => `
                <div class="sub-item selectable" data-pick="${index}-${subIndex}">
                    <span class="sub-item-name">${sub.name}</span>
                    <span class="sub-item-desc">${sub.desc}</span>
                    <span class="sub-item-price">${formatPrice(sub.price)}</span>
                </div>
            `).join('')}</div>` : ''}
            ${item.details ? `<details class="item-details"><summary>查看详细内容</summary><div class="item-details-content">${item.details.replace(/\n/g, '<br>')}</div></details>` : ''}
            ${item.link ? `<a class="item-link" href="${item.link}" target="_blank">打开定制商店选购</a>` : ''}
            ${item.price ? `<div class="item-price">${formatPrice(item.price)}</div>` : ''}
            ${item.redeemable ? '<span class="redeem-badge">可捐款兑换</span>' : ''}
        </div>
    `).join('');
    syncSelectedClass();
}

const seriesDesc = document.getElementById('seriesDesc');

function switchFilter(series) {
    filterBtns.forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.filter-btn[data-series="${series}"]`);
    if (btn) btn.classList.add('active');
    // 显示系列说明
    if (series !== 'all' && seriesDescriptions[series]) {
        seriesDesc.textContent = seriesDescriptions[series];
        seriesDesc.classList.add('visible');
    } else {
        seriesDesc.classList.remove('visible');
    }
    renderShop(series);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => switchFilter(btn.dataset.series));
});

shopGrid.addEventListener('click', (e) => {
    if (e.target.closest('a, summary, details, .item-details')) return;

    const sub = e.target.closest('.sub-item.selectable');
    if (sub && sub.dataset.pick) {
        const parts = sub.dataset.pick.split('-');
        toggleSelected(parseInt(parts[0], 10), parseInt(parts[1], 10));
        return;
    }

    const card = e.target.closest('.shop-item');
    if (!card) return;

    if (e.target.classList.contains('redeem-badge')) {
        switchTab('redeem');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (card.dataset.pick) {
        toggleSelected(parseInt(card.dataset.pick, 10));
    }
});

document.getElementById('pickClear').addEventListener('click', () => {
    selectedKeys.clear();
    updatePickBar();
    syncSelectedClass();
});

document.getElementById('pickGo').addEventListener('click', () => {
    switchTab('redeem');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== URL hash 路由 =====
// 支持: #steam, #dungeon, #hero, #reborn, #redeem 等
function isBuyWindow() {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 8;
}

function isSafeBuyUrl(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function getBuyUrlFromLocation() {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('buy') || params.get('url');
    if (fromQuery && isSafeBuyUrl(fromQuery)) return fromQuery;

    const rawHash = location.hash.replace(/^#/, '');
    if (!rawHash) return '';

    if (/^https?:\/\//i.test(rawHash) && isSafeBuyUrl(rawHash)) return rawHash;

    const hashParams = new URLSearchParams(rawHash.includes('?') ? rawHash.split('?')[1] : rawHash);
    const fromHash = hashParams.get('buy') || hashParams.get('url');
    if (fromHash && isSafeBuyUrl(fromHash)) return fromHash;

    return '';
}

function updateBuyNowLink() {
    const box = document.getElementById('buyNowBox');
    const link = document.getElementById('buyNowLink');
    const buyUrl = getBuyUrlFromLocation();
    if (buyUrl && isBuyWindow()) {
        link.href = buyUrl;
        box.classList.remove('hidden');
    } else {
        link.removeAttribute('href');
        box.classList.add('hidden');
    }
}

function handleHash() {
    updateBuyNowLink();
    const hash = location.hash.replace('#', '');
    if (!hash) return false;
    if (/^https?:\/\//i.test(hash) || hash.indexOf('buy=') === 0 || hash.indexOf('url=') === 0) {
        return false;
    }
    if (hash === 'redeem') {
        switchTab('redeem');
        return true;
    } else if (seriesNames[hash] || hash === 'all') {
        switchTab('shop');
        switchFilter(hash);
        return true;
    }
    return false;
}

window.addEventListener('hashchange', handleHash);
window.addEventListener('popstate', updateBuyNowLink);

// 初始渲染：有 hash 则跳转对应分类，否则显示全部
if (!handleHash()) {
    renderShop('all');
}
updateBuyNowLink();
