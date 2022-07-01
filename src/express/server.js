
//1.引入express
const express = require("express");

//2.创建应用路由
const app = express();
//app.use(express.static(__dirname + '/dist'))
//3.创建路由规则
app.get('/banner', (request, response) => {
    const sup = [
        {
            "id": "1",
            "imgUrl": "/images/banner1.jpg"
        },
        {
            "id": "2",
            "imgUrl": "/images/banner2.jpg"
        },
        {
            "id": "3",
            "imgUrl": "/images/banner3.jpg"
        },
        {
            "id": "4",
            "imgUrl": "/images/banner4.jpg"
        }
    ]
    //设置响应头  设置允许跨域

    response.setHeader('Access-Control-Allow-Origin', ' * ');
    //设置响应体
    response.send(sup)
})
app.get('/floor', (request, response) => {
    const sub = [{
        "id": "001",
        "name": "家用电器",
        "keywords": ["节能补贴", "4K电视", "空气净化器", "IH电饭煲", "滚筒洗衣机", "电热水器"],
        "imgUrl": "/images/floor-1-1.png",
        "navList": [{
            "url": "#",
            "text": "热门"
        },
        {
            "url": "#",
            "text": "大家电"
        },
        {
            "url": "#",
            "text": "生活电器"
        },
        {
            "url": "#",
            "text": "厨房电器"
        },
        {
            "url": "#",
            "text": "应季电器"
        },
        {
            "url": "#",
            "text": "空气/净水"
        },
        {
            "url": "#",
            "text": "高端电器"
        }
        ],
        "carouselList": [{
            "id": "0011",
            "imgUrl": "/images/floor-1-b01.png"
        },
        {
            "id": "0012",
            "imgUrl": "/images/floor-1-b02.png"
        },
        {
            "id": "0013",
            "imgUrl": "/images/floor-1-b03.png"
        }
        ],
        "recommendList": [
            "/images/floor-1-2.png",
            "/images/floor-1-3.png",
            "/images/floor-1-5.png",
            "/images/floor-1-6.png"
        ],
        "bigImg": "/images/floor-1-4.png"
    },
    {
        "id": "002",
        "name": "手机通讯",
        "keywords": ["节能补贴2", "4K电视2", "空气净化器2", "IH电饭煲2", "滚筒洗衣机2", "电热水器2"],
        "imgUrl": "/images/floor-1-1.png",
        "navList": [{
            "url": "#",
            "text": "热门2"
        },
        {
            "url": "#",
            "text": "大家电2"
        },
        {
            "url": "#",
            "text": "生活电器2"
        },
        {
            "url": "#",
            "text": "厨房电器2"
        },
        {
            "url": "#",
            "text": "应季电器2"
        },
        {
            "url": "#",
            "text": "空气/净水2"
        },
        {
            "url": "#",
            "text": "高端电器2"
        }
        ],
        "carouselList": [{
            "id": "0011",
            "imgUrl": "/images/floor-1-b01.png"
        },
        {
            "id": "0012",
            "imgUrl": "/images/floor-1-b02.png"
        },
        {
            "id": "0013",
            "imgUrl": "/images/floor-1-b03.png"
        }
        ],
        "recommendList": [
            "/images/floor-1-2.png",
            "/images/floor-1-3.png",
            "/images/floor-1-5.png",
            "/images/floor-1-6.png"
        ],
        "bigImg": "/images/floor-1-4.png"
    }
    ]
    //设置响应头  设置允许跨域

    response.setHeader('Access-Control-Allow-Origin', ' * ');
    //设置响应体
    response.send(sub)
})

//4.监听端口启动
app.listen(3000, () => { console.log("服务已经启动，3000端口监听中", 3000); })


