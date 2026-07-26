// ===== 商品数据 =====
const shopItems = [
    // 魔塔地牢系列
    { series: "dungeon", name: "地牢探索者皮肤包", desc: "包含3套稀有角色外观", price: "¥12", original: "¥18", redeemable: true },
    { series: "dungeon", name: "隐藏关卡·深渊", desc: "解锁地下5层隐藏区域", price: "¥6", original: "¥10", redeemable: true },
    { series: "dungeon", name: "传奇装备礼包", desc: "获得5件传奇品质装备", price: "¥18", original: "¥25", redeemable: true },
    { series: "dungeon", name: "无限体力月卡", desc: "30天内体力无限", price: "¥30", original: "¥30", redeemable: false },

    // 魔塔勇者系列
    { series: "hero", name: "勇者之翼", desc: "飞行能力，跳过部分障碍", price: "¥8", original: "¥12", redeemable: true },
    { series: "hero", name: "远古宝藏地图", desc: "揭示所有隐藏宝箱位置", price: "¥6", original: "¥8", redeemable: true },
    { series: "hero", name: "双倍经验卷轴×10", desc: "战斗经验翻倍，持续1小时/张", price: "¥15", original: "¥20", redeemable: true },
    { series: "hero", name: "英雄试炼场", desc: "高难度挑战副本，奖励丰厚", price: "¥10", original: "¥15", redeemable: true },

    // 转生魔塔系列
    { series: "reborn", name: "600*神魔水晶【10抽】+6电量", desc: "基础抽卡礼包，附赠6点电量", price: "¥6", original: "", redeemable: true },
    { series: "reborn", name: "2550*神魔水晶【42抽】+25电量", desc: "超值抽卡礼包，附赠25点电量", price: "¥25", original: "", redeemable: true },
    { series: "reborn", name: "8000*神魔水晶【133抽】+78电量", desc: "豪华抽卡礼包，附赠78点电量", price: "¥78", original: "", redeemable: true },
    { series: "reborn", name: "19500*神魔水晶【325抽】+188电量", desc: "至尊抽卡礼包，附赠188点电量", price: "¥188", original: "", redeemable: true },

    // 其他系列
    { series: "other", name: "像素画框合集", desc: "12个装饰用像素艺术画框", price: "¥5", original: "¥8", redeemable: true },
    { series: "other", name: "BGM原声大碟", desc: "全系列游戏音乐离线收听", price: "¥15", original: "¥20", redeemable: true },
    { series: "other", name: "开发者日志", desc: "查看游戏背后的开发故事", price: "免费", original: "", redeemable: false },
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
