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
    { series: "reborn", name: "命运之轮", desc: "转生时额外保留3项属性", price: "¥12", original: "¥18", redeemable: true },
    { series: "reborn", name: "时空回溯石×5", desc: "撤回最近一步操作", price: "¥8", original: "¥12", redeemable: true },
    { series: "reborn", name: "隐藏结局·轮回", desc: "解锁第四个隐藏结局线", price: "¥6", original: "¥10", redeemable: true },
    { series: "reborn", name: "全角色解锁", desc: "一次性解锁所有可玩角色", price: "¥25", original: "¥38", redeemable: true },

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
