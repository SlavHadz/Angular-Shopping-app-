const { Router } = require('express');
const router = new Router();

router.get('/anime', (req, res) => {
    let animeItems = [
        {
            "name": "Baka Bag",
            "prize": "$19.99",
            "img": "https://i.etsystatic.com/5318198/r/il/b1a969/1659904804/il_570xN.1659904804_9fjs.jpg"
        },
        {
            "name": "Attack on Titan Sweatshirt",
            "prize": "$34.99",
            "img": "https://image.spreadshirtmedia.com/image-server/v1/products/1001489093/views/2,width=650,height=650,appearanceId=8,version=1538992801/attack-on-titans-hoodie-recon-corps-logo.jpg"
        },
        {
            "name": "Bakemonogatari T-Shirt",
            "prize": "$24.99",
            "img": "https://ae01.alicdn.com/kf/HTB1C6SMlNWYBuNjy1zkq6xGGpXaC/High-Q-Bakemonogatari-Monstory-cotton-t-shirt-tee-t-shirt-Ghost-and-Story-Oshino-Shinobu-Araragi.jpg"
        },
        {
            "name": "Durarara Dollars T-Shirt",
            "prize": "$22.99",
            "img": "https://ih1.redbubble.net/image.154772064.4454/ra%2Cunisex_tshirt%2Cx1850%2C101010%3A01c5ca27c6%2Cfront-c%2C435%2C380%2C420%2C460-bg%2Cf8f8f8.lite-1u2.jpg"
        },
        {
            "name": "Waifu shirt",
            "prize": "$17.99",
            "img": "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140,2000%7C81IB-f6re4L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png"
        },
        {
            "name": "Asuka Evangelion Pillow",
            "prize": "$11.99",
            "img": "https://res.cloudinary.com/teepublic/image/private/s--mUC10Eox--/c_crop,x_10,y_10/c_fit,h_1419/c_crop,g_north_west,h_1051,w_1051,x_33,y_-44/l_upload:v1507037314:production:blanks:gbajnunp66ec7xftnpq1/fl_layer_apply,g_north_west,x_-105,y_-143/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1518634174/production/designs/2364557_0.jpg"
        }
    ];

    res.json(animeItems);
});

router.get('/sports', (req, res) => {
    let sportsItems = [
        {
            "name": "Nike Mercurial Vapor X| Men's football boots",
            "prize": "$99.99",
            "img": "https://img.auctiva.com/imgdata/1/2/7/9/4/0/1/webimg/971362538_o.jpg"
        },
        {
            "name": "Newcastle United Home Kit season 2018-19",
            "prize": "$69.99",
            "img": "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/5b59885df7b09dbd15000003.jpeg"
        },
        {
            "name": "Chelsea FC football socks",
            "prize": "$14.99",
            "img": "https://www.acasports.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/chelsea-away-socks-17-18-1_1.jpg"
        },
        {
            "name": "Accrington Stanley Home Kit season 2018-19",
            "prize": "$44.99",
            "img": "https://www.plasticboxshop.co.uk/blog/wp-content/uploads/2016/07/1466427315-42293000.jpg"
        },
        {
            "name": "Everton FC Home Kit season 2018-19",
            "prize": "$79.99",
            "img": "https://gbd2015.sportrespect.com/uploaded/gallery/old/46ff40091797c0e50813b7a4bcc950b652e924aa.jpg"
        },
        {
            "name": "Arsenal FC Home Kit season 2018-19",
            "prize": "$99.99",
            "img": "http://www.idfootballdesk.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/5/753209_012-bundle.jpg"
        }
    ];

    res.json(sportsItems);
})

router.get('/electronics', (req, res) => {
    let electronicsItems = [
        {
            "name": "Beats Headphones",
            "prize": "$200.00",
            "img": "https://brain-images-ssl.cdn.dixons.com/7/3/10170337/u_10170337.jpg"
        },
        {
            "name": "Lenovo IdeaPad 320 Laptop",
            "prize": "$599.00",
            "img": "https://cf3.s3.souqcdn.com/item/2018/01/22/23/50/47/31/item_XL_23504731_92360703.jpg"
        },
        {
            "name": "LED Smart Samsung, 40\", 4K Ultra HD",
            "prize": "$399.00",
            "img": "https://3.imimg.com/data3/RF/ID/MY-9040593/samsung-40h5500-smart-tv-40-inch-500x500.jpg"
        },
        {
            "name": "Sony Playstation 4 Slim 1 TB",
            "prize": "$250.00",
            "img": "https://www.target.com.au/medias/static_content/product/images/large/28/85/A1022885.jpg?impolicy=mobile_hero"
        },
        {
            "name": "Sony Playstation 4 Slim 500 GB",
            "prize": "$200.00",
            "img": "https://www.target.com.au/medias/static_content/product/images/large/28/85/A1022885.jpg?impolicy=mobile_hero"
        },
        {
            "name": "Sony Playstation 4 1 TB",
            "prize": "$220.00",
            "img": "https://www.target.com.au/medias/static_content/product/images/large/28/85/A1022885.jpg?impolicy=mobile_hero"
        }
    ];

    res.json(electronicsItems);
});

router.post('/order', (req, res) => {
    let order = req.body;
    res.status(200).send(req.body);
});

module.exports = router;