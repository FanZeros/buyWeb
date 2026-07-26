// ===== 商品数据 =====
const shopItems = [
    // 魔塔地牢系列
    { series: "dungeon", name: "魔塔地牢新手支持包", desc: "地牢探险者*3天 + 15000灵魂 + 100地牢碎片（限购一次）", price: "¥6", original: "¥12", redeemable: true },
    { series: "dungeon", name: "魔塔地牢-浅水沼泽DLC", desc: "解锁隐藏第六区域：浅水沼泽，拯救远古龙获取远古水晶", price: "¥8", original: "", redeemable: true },
    { series: "dungeon", name: "地牢探险者周卡【7天】", desc: "80地牢碎片 + 7日探险者时长，灵魂获得×2 + 每日12碎片", price: "¥7.20", original: "", redeemable: true },
    { series: "dungeon", name: "地牢探险者月卡【30天】", desc: "360地牢碎片 + 30日探险者时长，灵魂获得×2 + 每日12碎片", price: "¥25", original: "", redeemable: true },
    { series: "dungeon", name: "地牢探险者永久卡", desc: "10000地牢碎片 + 永久探险者，灵魂×2 + 每日12碎片", price: "¥125", original: "", redeemable: true },
    { series: "dungeon", name: "魔塔地牢-基础组合包", desc: "装备栏永久解锁×3 + 三件强力装备（破魔刀/隐形护盾/双刀）+ 永久钥匙包", price: "¥25", original: "", redeemable: true },
    { series: "dungeon", name: "Steam奖励获得礼包【手机端用】", desc: "【Steam游戏本体】6000灵魂 + 永久200%灵魂获取 + 蒸汽戒指[Ex] + 魔王宝藏DLC + 自定义种子 + 龙年坐骑", price: "¥15", original: "", redeemable: true },
    { series: "dungeon", name: "永久自选机会", desc: "额外自选技能/装备个数，通关后可用，可多次叠加购买", price: "¥14.44起", original: "", redeemable: true },
    { series: "dungeon", name: "购买定制技能装备", desc: "无需消耗自选点数，购买后菜单一键兑换。详情下载表格查看", price: "¥60起", original: "", redeemable: true, link: "http://zeros.group/dz.xlsx" },
    { series: "dungeon", name: "支持者包【角色+DLC】", desc: "解锁全部35+角色 + 7个DLC + 初始奖励15级 + 游戏CG解锁", price: "¥40.88", original: "", redeemable: true },

    // 魔塔勇者系列
    { series: "hero", name: "勇者钻石包", desc: "600钻石兑换码，可购买新角色、钥匙及装备", price: "¥6.88", original: "¥7.88", redeemable: true },
    { series: "hero", name: "勇者钻石箱", desc: "1888钻石兑换码 + Zeros游戏内测资格", price: "¥22.88", original: "", redeemable: true },
    { series: "hero", name: "勇者钻石矿", desc: "3250钻石兑换码 + Zeros游戏内测资格", price: "¥32.88", original: "¥38.88", redeemable: true },
    { series: "hero", name: "勇者钻石柜", desc: "6880钻石兑换码 + Zeros游戏内测资格 + 游戏致谢名单", price: "¥68.88", original: "¥78.88", redeemable: true },

    // 转生魔塔系列
    { series: "reborn", name: "600*神魔水晶【10抽】+6电量", desc: "基础抽卡礼包，附赠6点电量", price: "¥6", original: "", redeemable: true },
    { series: "reborn", name: "2550*神魔水晶【42抽】+25电量", desc: "超值抽卡礼包，附赠25点电量", price: "¥25", original: "", redeemable: true },
    { series: "reborn", name: "8000*神魔水晶【133抽】+78电量", desc: "豪华抽卡礼包，附赠78点电量", price: "¥78", original: "", redeemable: true },
    { series: "reborn", name: "19500*神魔水晶【325抽】+188电量", desc: "至尊抽卡礼包，附赠188点电量", price: "¥188", original: "", redeemable: true },

    // 其他系列
    { series: "other", name: "敬请期待", desc: "更多内容筹备中...", price: "", original: "", redeemable: false },
];

const seriesNames = {
    dungeon: "魔塔地牢",
    hero: "魔塔勇者",
    reborn: "转生魔塔",
    other: "其他系列"
};

// ===== 标签切换 =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// ===== 商品筛选 =====
const filterBtns = document.querySelectorAll('.filter-btn');
const shopGrid = document.getElementById('shopGrid');

function renderShop(series) {
    const items = series === 'all' ? shopItems : shopItems.filter(item => item.series === series);
    shopGrid.innerHTML = items.map(item => `
        <div class="shop-item" data-series="${item.series}">
            <span class="item-series">${seriesNames[item.series]}</span>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            ${item.link ? `<a class="item-link" href="${item.link}" target="_blank">下载详情表格</a>` : ''}
            <div class="item-price">
                ${item.price}
                ${item.original ? `<span class="original">${item.original}</span>` : ''}
            </div>
            ${item.redeemable ? '<span class="redeem-badge">可捐款兑换</span>' : ''}
        </div>
    `).join('');
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderShop(btn.dataset.series);
    });
});

// 初始渲染
renderShop('all');
