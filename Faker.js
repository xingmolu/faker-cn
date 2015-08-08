/*
Copyright (c) 2010 Matthew Bergman & Marak Squires http://github.com/marak/Faker.js/
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*************** AUTOGENERATED @ 1367919091401 ***************
    WARNING: THIS FILE WAS AUTOGENERATED BY THE FAKER BUILD SCRIPT
    MODIFYING THIS FILE IS FINE, BUT YOU REALLY SHOULD BE MODIFYING
    THE LIBRARY DIRECTLY AND REGENERATING THIS FILE USING BUILD.js!!!!
    Faker.js - Written by Matthew Bergman and Marak Squires
    ## USAGE
    ### browser -
          <script src = "Faker.js" type = "text/javascript"></script>
          <script>
            var randomName = Faker.Name.findName(); // Caitlyn Kerluke
            var randomEmail = Faker.Internet.email(); // Rusty@arne.info
            var randomCard = Faker.Helpers.createCard(); // random contact card containing many properties
          </script>
    ### node.js -
          var Faker = require('./Faker');
          var randomName = Faker.Name.findName(); // Rowan Nikolaus
          var randomEmail = Faker.Internet.email(); // Kassandra.Haley@erich.biz
          var randomCard = Faker.Helpers.createCard(); // random contact card containing many properties
*/
!(function(){
'use strict';
// exported module
var Faker = {};
Faker.version = "0.5.5";
Faker.Name = {};
Faker.Name.firstName = function () {
        return Faker.random.first_name();
    };

Faker.Name.lastName = function () {
        return Faker.random.last_name();
    };

Faker.Name.findName = function () {
        var r = Faker.random.number(16);
        switch (r) {
        case 0:
            return Faker.random.name_prefix() + this.lastName();
        case 1:
            return this.lastName() + Faker.random.name_suffix();
        }

        return this.lastName() + this.firstName();
    };

Faker.Address = {};
Faker.Address.zipCode = function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(['######']));
    };

Faker.Address.zipCodeFormat = function (format) {
        return Helpers.replaceSymbolWithNumber(['######'][format]);
    };

Faker.Address.city = function () {
        var result;
        result = Faker.random.last_name() + Faker.random.last_name() + Faker.random.city_suffix();
        return result;
    };

Faker.Address.streetName = function () {
        var result;
        switch (Faker.random.number(2)) {
        case 0:
            result = Faker.random.last_name() + Faker.random.last_name() + Faker.random.street_suffix();
            break;
        case 1:
            result = Faker.random.first_name() + Faker.random.last_name() + Faker.random.street_suffix();
            break;
        }
        return result;
    };

Faker.Address.streetAddress = function (useFullAddress) {
        if (useFullAddress === undefined) { useFullAddress = false; }
        var address = "";
        switch (Faker.random.number(3)) {
        case 0:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("#####") + "号";
            break;
        case 1:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("####") +  "号";
            break;
        case 2:
            address = this.streetName() + Helpers.replaceSymbolWithNumber("###") + "号";
            break;
        }
        return useFullAddress ? (address + this.secondaryAddress()) : address;
    };

Faker.Address.secondaryAddress = function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.array_element(
            [
                '##号楼#0#',
                '##栋##号#0#',
                '#0#'
            ]
        ));
    };

Faker.Address.brState = function (useAbbr) {
        return useAbbr ? Faker.random.br_state_abbr() : Faker.random.br_state();
    };

Faker.Address.ukCounty = function () {
        return Faker.random.uk_county();
    };

Faker.Address.ukCountry = function () {
        return Faker.random.uk_country();
    };

Faker.Address.cnState = function (useAbbr) {
        return useAbbr ? Faker.random.cn_state_abbr() : Faker.random.cn_state();
    };

Faker.Address.latitude = function () {
        return (Faker.random.number(180 * 10000) / 10000.0 - 90.0).toFixed(4);
    };

Faker.Address.longitude = function () {
        return (Faker.random.number(360 * 10000) / 10000.0 - 180.0).toFixed(4);
    };

Faker.PhoneNumber = {};
Faker.PhoneNumber.phoneNumber = function () {
        return Helpers.replaceSymbolWithNumber(Faker.random.phone_formats());
    };

Faker.PhoneNumber.phoneNumberFormat = function (phoneFormatsArrayIndex) {
        return Helpers.replaceSymbolWithNumber(definitions.phone_formats[phoneFormatsArrayIndex]);
    };

Faker.Internet = {};
Faker.Internet.email = function () {
        return Faker.Helpers.slugify(this.userName()) + "@" + Faker.Helpers.slugify(this.domainName());
    };

Faker.Internet.userName = function () {
        var result;
        switch (Faker.random.number(2)) {
        case 0:
            result = Faker.random.first_name();
            break;
        case 1:
            result = Faker.random.first_name() + Faker.random.array_element([".", "_"]) + Faker.random.last_name();
            break;
        }
        return result;
    };

Faker.Internet.domainName = function () {
        return this.domainWord() + "." + Faker.random.domain_suffix();
    };

Faker.Internet.domainWord = function () {
        return Faker.random.first_name().toLowerCase();
    };

Faker.Internet.ip = function () {
        var randNum = function () {
            return (Math.random() * 254 + 1).toFixed(0);
        };

        var result = [];
        for (var i = 0; i < 4; i++) {
            result[i] = randNum();
        }

        return result.join(".");
    };

Faker.Company = {};
Faker.Company.suffixes = function () {
        return ["有限公司", "公司", "集团", "控股集团", "局"];
    };

Faker.Company.companyName = function (format) {
        switch ((format ? format : Faker.random.number(2))) {
        case 0:
            return Faker.Name.lastName() + Faker.Name.lastName() + this.companySuffix();
        case 1:
            return Faker.Name.lastName() + Faker.Name.lastName() + Faker.Name.lastName() + this.companySuffix();
        }
    };

Faker.Company.companySuffix = function () {
        return Faker.random.array_element(this.suffixes());
    };

Faker.Company.catchPhrase = function () {
        return Faker.random.catch_phrase_adjective() + "" +
            Faker.random.catch_phrase_descriptor() + "" +
            Faker.random.catch_phrase_noun();
    };

Faker.Company.bs = function () {
        return Faker.random.bs_adjective() + "" +
            Faker.random.bs_buzz() + "" +
            Faker.random.bs_noun();
    };

Faker.Lorem = {};
Faker.Lorem.words = function (num) {
        if (typeof num == 'undefined') { num = 10; }
        return Helpers.shuffle(definitions.lorem).slice(0, num);
    };

Faker.Lorem.sentence = function (wordCount) {
        if (typeof wordCount == 'undefined') { wordCount = 10; }

        // strange issue with the node_min_test failing for captialize, please fix and add this back
        //return  this.words(wordCount + Helpers.randomNumber(7)).join(' ').capitalize();

        return  this.words(wordCount + Faker.random.number(7)).join('');
    };

Faker.Lorem.sentences = function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 10; }
        var sentences = [];
        for (sentenceCount; sentenceCount > 0; sentenceCount--) {
            sentences.push(this.sentence());
        }
        return sentences;
    };

Faker.Lorem.paragraph = function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 10; }
        return this.sentences(sentenceCount + Faker.random.number(10)).join(',');
    };

Faker.Lorem.paragraphs = function (paragraphCount) {
        if (typeof paragraphCount == 'undefined') { paragraphCount = 10; }
        var paragraphs = [];
        for (paragraphCount; paragraphCount > 0; paragraphCount--) {
            paragraphs.push(this.paragraph());
        }
        return paragraphs.join("\n\r\t");
    };

Faker.Helpers = {};
Faker.Helpers.randomNumber = function (range) {
    return Faker.random.number(range);
};

Faker.Helpers.randomize = function (array) {
    return Faker.random.array_element(array);
};

Faker.Helpers.slugify = function (string) {
    return pinyin(string)[0].join('').toLowerCase().replace(/ /g, '-').replace(/[^\w\.\-]+/g, '');
};

Faker.Helpers.replaceSymbolWithNumber = function (string, symbol) {
    // default symbol is '#'
    if (symbol === undefined) {
        symbol = '#';
    }

    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            str += Math.floor(Math.random() * 10);
        } else {
            str += string[i];
        }
    }
    return str;
};

Faker.Helpers.shuffle = function (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

Faker.Helpers.createCard = function () {
    return {
        "name": Faker.Name.findName(),
        "username": Faker.Internet.userName(),
        "email": Faker.Internet.email(),
        "address": {
            "streetA": Faker.Address.streetName(),
            "streetB": Faker.Address.streetAddress(),
            "streetC": Faker.Address.streetAddress(true),
            "streetD": Faker.Address.secondaryAddress(),
            "city": Faker.Address.city(),
            "ukCounty": Faker.Address.ukCounty(),
            "ukCountry": Faker.Address.ukCountry(),
            "zipcode": Faker.Address.zipCode(),
            "geo": {
                "lat": Faker.Address.latitude(),
                "lng": Faker.Address.longitude()
            }
        },
        "phone": Faker.PhoneNumber.phoneNumber(),
        "website": Faker.Internet.domainName(),
        "company": {
            "name": Faker.Company.companyName(),
            "catchPhrase": Faker.Company.catchPhrase(),
            "bs": Faker.Company.bs()
        },
        "posts": [
            {
                "words": Faker.Lorem.words(),
                "sentence": Faker.Lorem.sentence(),
                "sentences": Faker.Lorem.sentences(),
                "paragraph": Faker.Lorem.paragraph()
            },
            {
                "words": Faker.Lorem.words(),
                "sentence": Faker.Lorem.sentence(),
                "sentences": Faker.Lorem.sentences(),
                "paragraph": Faker.Lorem.paragraph()
            },
            {
                "words": Faker.Lorem.words(),
                "sentence": Faker.Lorem.sentence(),
                "sentences": Faker.Lorem.sentences(),
                "paragraph": Faker.Lorem.paragraph()
            }
        ]
    };
};

Faker.Helpers.userCard = function () {
    return {
        "name": Faker.Name.findName(),
        "username": Faker.Internet.userName(),
        "email": Faker.Internet.email(),
        "address": {
            "street": Faker.Address.streetName(true),
            "suite": Faker.Address.secondaryAddress(),
            "city": Faker.Address.city(),
            "zipcode": Faker.Address.zipCode(),
            "geo": {
                "lat": Faker.Address.latitude(),
                "lng": Faker.Address.longitude()
            }
        },
        "phone": Faker.PhoneNumber.phoneNumber(),
        "website": Faker.Internet.domainName(),
        "company": {
            "name": Faker.Company.companyName(),
            "catchPhrase": Faker.Company.catchPhrase(),
            "bs": Faker.Company.bs()
        }
    };
};




Faker.random = {};
Faker.random.number = function (range) {
        return Math.floor(Math.random() * range);
    };

Faker.random.array_element = function (array) {
        var r = Math.floor(Math.random() * array.length);
        return array[r];
    };

Faker.random.city_prefix = function () {
        return this.array_element(definitions.city_prefix);
    };

Faker.random.city_suffix = function () {
        return this.array_element(definitions.city_suffix);
    };

Faker.random.street_suffix = function () {
        return this.array_element(definitions.street_suffix);
    };

Faker.random.br_state = function () {
        return this.array_element(definitions.br_state);
    };

Faker.random.br_state_abbr = function () {
        return this.array_element(definitions.br_state_abbr);
    };

Faker.random.cn_state = function () {
        return this.array_element(definitions.cn_state);
    };

Faker.random.cn_state_abbr = function () {
        return this.array_element(definitions.cn_state_abbr);
    };

Faker.random.uk_county = function () {
        return this.array_element(definitions.uk_county);
    };

Faker.random.uk_country = function () {
        return this.array_element(definitions.uk_country);
    };

Faker.random.first_name = function () {
        return this.array_element(definitions.first_name);
    };

Faker.random.last_name = function () {
        return this.array_element(definitions.last_name);
    };

Faker.random.name_prefix = function () {
        return this.array_element(definitions.name_prefix);
    };

Faker.random.name_suffix = function () {
        return this.array_element(definitions.name_suffix);
    };

Faker.random.catch_phrase_adjective = function () {
        return this.array_element(definitions.catch_phrase_adjective);
    };

Faker.random.catch_phrase_descriptor = function () {
        return this.array_element(definitions.catch_phrase_descriptor);
    };

Faker.random.catch_phrase_noun = function () {
        return this.array_element(definitions.catch_phrase_noun);
    };

Faker.random.bs_adjective = function () {
        return this.array_element(definitions.bs_adjective);
    };

Faker.random.bs_buzz = function () {
        return this.array_element(definitions.bs_buzz);
    };

Faker.random.bs_noun = function () {
        return this.array_element(definitions.bs_noun);
    };

Faker.random.phone_formats = function () {
        return this.array_element(definitions.phone_formats);
    };

Faker.random.domain_suffix = function () {
        return this.array_element(definitions.domain_suffix);
    };

Faker.definitions = {};
Faker.definitions.first_name = ["安邦","安福","安歌","安国","安和","安康","安澜","安民","安宁","安平","安然","安顺","安翔","安晏","安宜","安怡","安易","安志","昂然","昂雄","宾白","宾鸿","宾实","彬彬","彬炳","彬郁","斌斌","斌蔚","滨海","波光","波鸿","波峻","波涛","博瀚","博超","博达","博厚","博简","博明","博容","博赡","博涉","博实","博涛","博文","博学","博雅","博延","博艺","博易","博裕","博远","才捷","才良","才艺","才英","才哲","才俊","成和","成弘","成化","成济","成礼","成龙","成仁","成双","成天","成文","成业","成益","成荫","成周","承安","承弼","承德","承恩","承福","承基","承教","承平","承嗣","承天","承望","承宣","承颜","承业","承悦","承允","承运","承载","承泽","承志","德本","德海","德厚","德华","德辉","德惠","德容","德润","德寿","德水","德馨","德曜","德业","德义","德庸","德佑","德宇","德元","德运","德泽","德明","飞昂","飞白","飞飙","飞掣","飞尘","飞沉","飞驰","飞光","飞翰","飞航","飞翮","飞鸿","飞虎","飞捷","飞龙","飞鸾","飞鸣","飞鹏","飞扬","飞文","飞翔","飞星","飞翼","飞英","飞宇","飞羽","飞雨","飞语","飞跃","飞章","飞舟","风华","丰茂","丰羽","刚豪","刚洁","刚捷","刚毅","高昂","高岑","高畅","高超","高驰","高达","高澹","高飞","高芬","高峯","高峰","高歌","高格","高寒","高翰","高杰","高洁","高峻","高朗","高丽","高邈","高旻","高明","高爽","高兴","高轩","高雅","高扬","高阳","高义","高谊","高逸","高懿","高原","高远","高韵","高卓","光赫","光华","光辉","光济","光霁","光亮","光临","光明","光启","光熙","光耀","光誉","光远","国安","国兴","国源","冠宇","冠玉","晗昱","晗日","涵畅","涵涤","涵亮","涵忍","涵容","涵润","涵涵","涵煦","涵蓄","涵衍","涵意","涵映","涵育","翰采","翰池","翰飞","翰海","翰翮","翰林","翰墨","翰学","翰音","瀚玥","翰藻","瀚海","瀚漠","昊苍","昊昊","昊空","昊乾","昊穹","昊然","昊然","昊天","昊焱","昊英","浩波","浩博","浩初","浩大","浩宕","浩荡","浩歌","浩广","浩涆","浩瀚","浩浩","浩慨","浩旷","浩阔","浩漫","浩淼","浩渺","浩邈","浩气","浩然","浩穰","浩壤","浩思","浩言","皓轩","和蔼","和安","和璧","和昶","和畅","和风","和歌","和光","和平","和洽","和惬","和顺","和硕","和颂","和泰","和悌","和通","和同","和煦","和雅","和宜","和怡","和玉","和裕","和豫","和悦","和韵","和泽","和正","和志","鹤轩","弘博","弘大","弘方","弘光","弘和","弘厚","弘化","弘济","弘阔","弘亮","弘量","弘深","弘盛","弘图","弘伟","弘文","弘新","弘雅","弘扬","弘业","弘义","弘益","弘毅","弘懿","弘致","弘壮","宏伯","宏博","宏才","宏畅","宏达","宏大","宏放","宏富","宏峻","宏浚","宏恺","宏旷","宏阔","宏朗","宏茂","宏邈","宏儒","宏深","宏胜","宏盛","宏爽","宏硕","宏伟","宏扬","宏义","宏逸","宏毅","宏远","宏壮","鸿宝","鸿波","鸿博","鸿才","鸿彩","鸿畅","鸿畴","鸿达","鸿德","鸿飞","鸿风","鸿福","鸿光","鸿晖","鸿朗","鸿文","鸿熙","鸿羲","鸿禧","鸿信","鸿轩","鸿煊","鸿煊","鸿雪","鸿羽","鸿远","鸿云","鸿运","鸿哲","鸿祯","鸿振","鸿志","鸿卓","华奥","华采","华彩","华灿","华藏","华池","华翰","华皓","华晖","华辉","华茂","华美","华清","华荣","华容","嘉赐","嘉德","嘉福","嘉良","嘉茂","嘉木","嘉慕","嘉纳","嘉年","嘉平","嘉庆","嘉荣","嘉容","嘉瑞","嘉胜","嘉石","嘉实","嘉树","嘉澍","嘉熙","嘉禧","嘉祥","嘉歆","嘉许","嘉勋","嘉言","嘉谊","嘉懿","嘉颖","嘉佑","嘉玉","嘉誉","嘉悦","嘉运","嘉泽","嘉珍","嘉祯","嘉志","嘉致","坚白","坚壁","坚秉","坚成","坚诚","建安","建白","建柏","建本","建弼","建德","建华","建明","建茗","建木","建树","建同","建修","建业","建义","建元","建章","建中","健柏","金鑫","锦程","瑾瑜","晋鹏","经赋","经亘","经国","经略","经纶","经纬","经武","经业","经义","经艺","景澄","景福","景焕","景辉","景辉","景龙","景明","景山","景胜","景铄","景天","景同","景曜","靖琪","君昊","君浩","俊艾","俊拔","俊弼","俊才","俊材","俊驰","俊楚","俊达","俊德","俊发","俊风","俊豪","俊健","俊杰","俊捷","俊郎","俊力","俊良","俊迈","俊茂","俊美","俊民","俊名","俊明","俊楠","俊能","俊人","俊爽","俊悟","俊晤","俊侠","俊贤","俊雄","俊雅","俊彦","俊逸","俊英","俊友","俊语","俊誉","俊远","俊哲","俊喆","俊智","峻熙","季萌","季同","开畅","开诚","开宇","开济","开霁","开朗","凯安","凯唱","凯定","凯风","凯复","凯歌","凯捷","凯凯","凯康","凯乐","凯旋","凯泽","恺歌","恺乐","康安","康伯","康成","康德","康复","康健","康乐","康宁","康平","康胜","康盛","康时","康适","康顺","康泰","康裕","乐安","乐邦","乐成","乐池","乐和","乐家","乐康","乐人","乐容","乐山","乐生","乐圣","乐水","乐天","乐童","乐贤","乐心","乐欣","乐逸","乐意","乐音","乐咏","乐游","乐语","乐悦","乐湛","乐章","乐正","乐志","黎昕","黎明","力夫","力强","力勤","力行","力学","力言","立诚","立果","立人","立辉","立轩","立群","良奥","良弼","良才","良材","良策","良畴","良工","良翰","良吉","良骥","良俊","良骏","良朋","良平","良哲","理群","理全","茂才","茂材","茂德","茂典","茂实","茂学","茂勋","茂彦","敏博","敏才","敏达","敏叡","敏学","敏智","明诚","明达","明德","明辉","明杰","明俊","明朗","明亮","明旭","明煦","明轩","明远","明哲","明喆","明知","明志","明智","明珠","朋兴","朋义","彭勃","彭薄","彭湃","彭彭","彭魄","彭越","彭泽","彭祖","鹏程","鹏池","鹏飞","鹏赋","鹏海","鹏鲸","鹏举","鹏鹍","鹏鲲","鹏涛","鹏天","鹏翼","鹏云","鹏运","濮存","溥心","璞玉","璞瑜","浦和","浦泽","奇略","奇迈","奇胜","奇水","奇思","奇邃","奇伟","奇玮","奇文","奇希","奇逸","奇正","奇志","奇致","祺福","祺然","祺祥","祺瑞","琪睿","庆生","荣轩","锐达","锐锋","锐翰","锐进","锐精","锐立","锐利","锐思","锐逸","锐意","锐藻","锐泽","锐阵","锐志","锐智","睿博","睿才","睿诚","睿慈","睿聪","睿达","睿德","睿范","睿广","睿好","睿明","睿识","睿思","绍辉","绍钧","绍祺","绍元","升荣","圣杰","晟睿","思聪","思淼","思源","思远","思博","斯年","斯伯","泰初","泰和","泰河","泰鸿","泰华","泰宁","泰平","泰清","泰然","天材","天成","天赋","天干","天罡","天工","天翰","天和","天华","天骄","天空","天禄","天路","天瑞","天睿","天逸","天佑","天宇","天元","天韵","天泽","天纵","同方","同甫","同光","同和","同化","同济","巍昂","巍然","巍奕","伟博","伟毅","伟才","伟诚","伟茂","伟懋","伟祺","伟彦","伟晔","伟泽","伟兆","伟志","温纶","温茂","温书","温韦","温文","温瑜","文柏","文昌","文成","文德","文栋","文赋","文光","文翰","文虹","文华","文康","文乐","文林","文敏","文瑞","文山","文石","文星","文轩","文宣","文彦","文曜","文耀","文斌","文彬","文滨","向晨","向笛","向文","向明","向荣","向阳","翔宇","翔飞","项禹","项明","晓博","心水","心思","心远","欣德","欣嘉","欣可","欣然","欣荣","欣怡","欣怿","欣悦","新翰","新霁","新觉","新立","新荣","新知","信鸿","信厚","信鸥","信然","信瑞","兴安","兴邦","兴昌","兴朝","兴德","兴发","兴国","兴怀","兴平","兴庆","兴生","兴思","兴腾","兴旺","兴为","兴文","兴贤","兴修","兴学","兴言","兴业","兴运","星波","星辰","星驰","星光","星海","星汉","星河","星华","星晖","星火","星剑","星津","星阑","星纬","星文","星宇","星雨","星渊","星洲","修诚","修德","修杰","修洁","修谨","修筠","修明","修能","修平","修齐","修然","修为","修伟","修文","修雅","修永","修远","修真","修竹","修贤","旭尧","炫明","学博","学海","学林","学民","学名","学文","学义","学真","雪松","雪峰","雪风","雅昶","雅畅","雅达","雅惠","雅健","雅珺","雅逸","雅懿","雅志","炎彬","阳飙","阳飇","阳冰","阳波","阳伯","阳成","阳德","阳华","阳晖","阳辉","阳嘉","阳平","阳秋","阳荣","阳舒","阳朔","阳文","阳曦","阳夏","阳旭","阳煦","阳炎","阳焱","阳曜","阳羽","阳云","阳泽","阳州","烨赫","烨华","烨磊","烨霖","烨然","烨烁","烨伟","烨烨","烨熠","烨煜","毅然","逸仙","逸明","逸春","宜春","宜民","宜年","宜然","宜人","宜修","意远","意蕴","意致","意智","熠彤","懿轩","英飙","英博","英才","英达","英发","英范","英光","英豪","英华","英杰","英朗","英锐","英睿","英叡","英韶","英卫","英武","英悟","英勋","英彦","英耀","英奕","英逸","英毅","英哲","英喆","英卓","英资","英纵","永怡","永春","永安","永昌","永长","永丰","永福","永嘉","永康","永年","永宁","永寿","永思","永望","永新","永言","永逸","永元","永贞","咏德","咏歌","咏思","咏志","勇男","勇军","勇捷","勇锐","勇毅","宇达","宇航","宇寰","宇文","宇荫","雨伯","雨华","雨石","雨信","雨星","雨泽","玉宸","玉成","玉龙","玉泉","玉山","玉石","玉书","玉树","玉堂","玉轩","玉宇","玉韵","玉泽","煜祺","元白","元德","元化","元基","元嘉","元甲","元驹","元凯","元恺","元魁","元良","元亮","元龙","元明","元青","元思","元纬","元武","元勋","元正","元忠","元洲","远航","苑博","苑杰","越彬","蕴涵","蕴和","蕴藉","展鹏","哲瀚","哲茂","哲圣","哲彦","振海","振国","正诚","正初","正德","正浩","正豪","正平","正奇","正青","正卿","正文","正祥","正信","正雅","正阳","正业","正谊","正真","正志","志诚","志新","志勇","志明","志国","志强","志尚","志专","志文","志行","志学","志业","志义","志用","志泽","致远","智明","智鑫","智勇","智敏","智志","智渊","子安","子晋","子民","子明","子默","子墨","子平","子琪","子石","子实","子真","子濯","子昂","子轩","子瑜","自明","自强","作人","自怡","自珍","曾琪","泽宇","泽语","碧灵","诗柳","夏柳","采白","慕梅","乐安","冬菱","紫安","宛凝","雨雪","易真","安荷","静竹","代柔","丹秋","绮梅","依白","凝荷","幼珊","忆彤","凌青","之桃","芷荷","听荷","代玉","念珍","梦菲","夜春","千秋","白秋","谷菱","飞松","初瑶","惜灵","恨瑶","梦易","新瑶","曼梅","碧曼","友瑶","雨兰","夜柳","香蝶","盼巧","芷珍","香卉","含芙","夜云","凝雁","以莲","易容","元柳","安南","幼晴","尔琴","飞阳","白凡","沛萍","雪瑶","向卉","采文","乐珍","寒荷","觅双","白桃","安卉","迎曼","盼雁","乐松","涵山","恨寒","问枫","以柳","含海","秋春","翠曼","忆梅","涵柳","梦香","海蓝","晓曼","代珊","春冬","恨荷","忆丹","静芙","绮兰","梦安","紫丝","千雁","凝珍","香萱","梦容","飞柏","天真","翠琴","寄真","秋荷","代珊","初雪","雅柏","怜容","如风","南露","紫易","冰凡","海雪","语蓉","碧玉","翠岚","语风","盼丹","痴旋","凝梦","从雪","白枫","傲云","白梅","念露","慕凝","雅柔","盼柳","半青","从霜","怀柔","怜晴","夜蓉","代双","以南","若菱","芷文","寄春","南晴","恨之","梦寒","初翠","灵波","巧春","问夏","凌春","惜海","亦旋","沛芹","幼萱","白凝","初露","迎海","绮玉","凌香","寻芹","秋柳","尔白","映真","含雁","寒松","友珊","寻雪","忆柏","秋柏","巧风","恨蝶","青烟","问蕊","灵阳","春枫","又儿","雪巧","丹萱","凡双","孤萍","紫菱","寻凝","傲柏","傲儿","灵枫","尔丝","曼凝","若蕊","问丝","思枫","水卉","问梅","念寒","诗双","翠霜","夜香","寒蕾","凡阳","冷玉","平彤","语薇","幻珊","紫夏","凌波","芷蝶","丹南","之双","凡波","思雁","白莲","从菡","如容","采柳","沛岚","惜儿","夜玉","水儿","半凡","语海","听莲","幻枫","念柏","冰珍","思山","凝蕊","天玉","问香","思萱","向梦","夏旋","之槐","元灵","以彤","采萱","巧曼","绿兰","平蓝","问萍","绿蓉","碧曼","思卉","白柏","妙菡","怜阳","雨柏","雁菡","梦之","又莲","乐荷","寒天","凝琴","书南","映天","白梦","初瑶","恨竹","平露","含巧","慕蕊","半莲","醉卉","天菱","青雪","雅旋","巧荷","飞丹","恨云","若灵","尔云","幻天","诗兰","青梦","灵槐","忆秋","寒凝","凝芙","绮山","静白","尔蓉","尔冬","映萱","白筠","冰双","访彤","绿柏","夏云","笑翠","晓灵","含双","盼波","以云","怜翠","雁风","之卉","平松","问儿","绿柳","如蓉","曼容","天晴","丹琴","惜天","寻琴","痴春","依瑶","涵易","忆灵","从波","依柔","问兰","山晴","怜珊","之云","飞双","傲白","沛春","雨南","梦之","笑阳","代容","友琴","雁梅","友桃","从露","语柔","傲玉","觅夏","晓蓝","新晴","雨莲","凝旋","绿旋","幻香","觅双","冷亦","忆雪","友卉","幻翠","靖柔","寻菱","丹翠","安阳","雅寒","惜筠","尔安","雁易","飞瑶","夏兰","沛蓝","静丹","山芙","笑晴","新烟","笑旋","雁兰","凌翠","秋莲","书桃","傲松","语儿","映菡","初曼","听云","孤松","初夏","雅香","语雪","初珍","白安","冰薇","诗槐","冷玉","冰巧","之槐","香柳","问春","夏寒","半香","诗筠","新梅","白曼","安波","从阳","含桃","曼卉","笑萍","晓露","寻菡","沛白","平灵","水彤","安彤","涵易","乐巧","依风","紫南","亦丝","易蓉","紫萍","惜萱","诗蕾","寻绿","诗双","寻云","孤丹","谷蓝","惜香","谷枫","山灵","幻丝","友梅","从云","雁丝","盼旋","幼旋","尔蓝","沛山","代丝","痴梅","觅松","冰香","依玉","冰之","妙梦","以冬","碧春","曼青","冷菱","雪曼","安白","香桃","安春","千亦","凌蝶","又夏","沛凝","翠梅","书文","雪卉","乐儿","傲丝","安青","初蝶","寄灵","惜寒","雨竹","冬莲","绮南","翠柏","平凡","亦玉","孤兰","秋珊","新筠","半芹","夏瑶","念文","晓丝","涵蕾","雁凡","谷兰","灵凡","凝云","曼云","丹彤","夜梦","从筠","雁芙","语蝶","依波","晓旋","念之","盼芙","曼安","采珊","盼夏","初柳","迎天","曼安","南珍","妙芙","语柳","含莲","晓筠","夏山","尔容","采春","念梦","傲南","问薇","雨灵","凝安","冰海","初珍","宛菡","冬卉","盼晴","冷荷","寄翠","幻梅","如凡","语梦","易梦","千柔","向露","梦玉","傲霜","依霜","灵松","诗桃","书蝶","恨真","冰蝶","山槐","以晴","友易","梦桃","香菱","孤云","水蓉","雅容","飞烟","雁荷","代芙","醉易","夏烟","山梅","若南","恨桃","依秋","依波","香巧","紫萱","涵易","忆之","幻巧","水风","安寒","白亦","惜玉","碧春","怜雪","听南","念蕾","梦竹","千凡","寄琴","采波","元冬","思菱","平卉","笑柳","雪卉","南蓉","谷梦","巧兰","绿蝶","飞荷","平安","孤晴","芷荷","曼冬","寻巧","尔槐","以旋","绿蕊","初夏","依丝","怜南","千山","雨安","水风","寄柔","念巧","幼枫","凡桃","新儿","春翠","夏波","雨琴","静槐","元槐","映阳","飞薇","小凝","映寒","傲菡","谷蕊","笑槐","飞兰","笑卉","迎荷","元冬","书竹","半烟","绮波","小之","觅露","夜雪","春柔","寒梦","尔风","白梅","雨旋","芷珊","山彤","尔柳","沛柔","灵萱","沛凝","白容","乐蓉","映安","依云","映冬","凡雁","梦秋","醉柳","梦凡","秋巧","若云","元容","怀蕾","灵寒","天薇","白风","访波","亦凝","易绿","夜南","曼凡","亦巧","白萱","友安","诗翠","雪珍","海之","小蕊"];

Faker.definitions.last_name = ["赵","钱","孙","李","周","吴","郑","王","冯","陈","褚","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","魏","陶","姜","戚","谢","邹","喻","柏","水","窦","章","云","苏","潘","葛","奚","范","彭","郎","鲁","韦","昌","马","苗","凤","花","方","俞","任","袁","柳","酆","鲍","史","唐","费","廉","岑","薛","雷","贺","倪","汤","滕","殷","罗","毕","郝","邬","安","常","乐","于","时","傅","皮","卞","齐","康","伍","余","元","卜","顾","孟","平","黄","和","穆","萧","尹","姚","邵","湛","汪","祁","毛","禹","狄","米","贝","明","臧","计","伏","成","戴","谈","宋","茅","庞","熊","纪","舒","屈","项","祝","董","梁","杜","阮","蓝","闵","席","季","麻","强","贾","路","娄","危","江","童","颜","郭","梅","盛","林","刁","钟","徐","邱","骆","高","夏","蔡","田","樊","胡","凌","霍","虞","万","支","柯","昝","管","卢","莫","柯","房","裘","缪","干","解","应","宗","丁","宣","贲","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","钮","龚","程","嵇","邢","滑","裴","陆","荣","翁","荀","羊","于","惠","甄","曲","家","封","芮","羿","储","靳","汲","邴","糜","松","井","段","富","巫","乌","焦","巴","弓","牧","隗","山","谷","车","侯","宓","蓬","全","郗","班","仰","秋","仲","伊","宫","宁","仇","栾","暴","甘","钭","历","戎","祖","武","符","刘","景","詹","束","龙","叶","幸","司","韶","郜","黎","蓟","溥","印","宿","白","怀","蒲","邰","从","鄂","索","咸","籍","赖","卓","蔺","屠","蒙","池","乔","阳","郁","胥","能","苍","双","闻","莘","党","翟","谭","贡","劳","逄","姬","申","扶","堵","冉","宰","郦","雍","却","璩","桑","桂","濮","牛","寿","通","边","扈","燕","冀","浦","尚","农","温","别","庄","晏","柴","瞿","阎","充","慕","连","茹","习","宦","艾","鱼","容","向","古","易","慎","戈","廖","庾","终","暨","居","衡","步","都","耿","满","弘","匡","国","文","寇","广","禄","阙","东","欧","殳","沃","利","蔚","越","夔","隆","师","巩","厍","聂","晁","勾","敖","融","冷","訾","辛","阚","那","简","饶","空","曾","毋","沙","乜","养","鞠","须","丰","巢","关","蒯","相","查","后","荆","红","游","竺","权","逮","盍","益","桓","公","万俟","司马","上官","欧阳","夏侯","诸葛","闻人","东方","赫连","皇甫","尉迟","公羊","澹台","公冶","宗政","濮阳","淳于","单于","太叔","申屠","公孙","仲孙","轩辕","令狐","徐离","宇文","长孙","慕容","司徒","司空"];

Faker.definitions.name_prefix = ["老","小"];

Faker.definitions.name_suffix = ["先生","小姐","女士","总","处","工","队","老板","阿姨","大叔","大爷","小妹","大姐"];

Faker.definitions.br_state = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Paraná","Paraíba","Pará","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","Sergipe","São Paulo","Tocantins"];

Faker.definitions.br_state_abbr = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PR","PB","PA","PE","PI","RJ","RN","RS","RO","RR","SC","SE","SP","TO"];

Faker.definitions.cn_state = ["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市"," 江苏省"," 浙江省","安徽省","福建","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","香港特别行政区"," 澳门特别行政区","台湾省"];

Faker.definitions.cn_state_abbr = ["京","津","冀","晋","内蒙古","辽","吉","黑","沪","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","桂","琼","渝","蜀","黔","滇","藏","陕、秦","陇","青","宁","新","港","澳","台"];

Faker.definitions.city_prefix = [""];

Faker.definitions.city_suffix = ["市","镇","县"];

Faker.definitions.street_suffix = ["路","大街","弄","新村","花苑","花园","小区","站","村","园"];

Faker.definitions.uk_county = ["Avon","Bedfordshire","Berkshire","Borders","Buckinghamshire","Cambridgeshire","Central","Cheshire","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Durham","Dyfed","East Sussex","Essex","Fife","Gloucestershire","Grampian","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Humberside","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Lothian","Merseyside","Mid Glamorgan","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Oxfordshire","Powys","Rutland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Strathclyde","Suffolk","Surrey","Tayside","Tyne and Wear","Warwickshire","West Glamorgan","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire"];

Faker.definitions.uk_country = ["England","Scotland","Wales","Northern Ireland"];

Faker.definitions.catch_phrase_adjective = ["Adaptive","Advanced","Ameliorated","Assimilated","Automated","Balanced","Business-focused","Centralized","Cloned","Compatible","Configurable","Cross-group","Cross-platform","Customer-focused","Customizable","Decentralized","De-engineered","Devolved","Digitized","Distributed","Diverse","Down-sized","Enhanced","Enterprise-wide","Ergonomic","Exclusive","Expanded","Extended","Face to face","Focused","Front-line","Fully-configurable","Function-based","Fundamental","Future-proofed","Grass-roots","Horizontal","Implemented","Innovative","Integrated","Intuitive","Inverse","Managed","Mandatory","Monitored","Multi-channelled","Multi-lateral","Multi-layered","Multi-tiered","Networked","Object-based","Open-architected","Open-source","Operative","Optimized","Optional","Organic","Organized","Persevering","Persistent","Phased","Polarised","Pre-emptive","Proactive","Profit-focused","Profound","Programmable","Progressive","Public-key","Quality-focused","Reactive","Realigned","Re-contextualized","Re-engineered","Reduced","Reverse-engineered","Right-sized","Robust","Seamless","Secured","Self-enabling","Sharable","Stand-alone","Streamlined","Switchable","Synchronised","Synergistic","Synergized","Team-oriented","Total","Triple-buffered","Universal","Up-sized","Upgradable","User-centric","User-friendly","Versatile","Virtual","Visionary","Vision-oriented"];

Faker.definitions.catch_phrase_descriptor = ["24 hour","24/7","3rd generation","4th generation","5th generation","6th generation","actuating","analyzing","assymetric","asynchronous","attitude-oriented","background","bandwidth-monitored","bi-directional","bifurcated","bottom-line","clear-thinking","client-driven","client-server","coherent","cohesive","composite","context-sensitive","contextually-based","content-based","dedicated","demand-driven","didactic","directional","discrete","disintermediate","dynamic","eco-centric","empowering","encompassing","even-keeled","executive","explicit","exuding","fault-tolerant","foreground","fresh-thinking","full-range","global","grid-enabled","heuristic","high-level","holistic","homogeneous","human-resource","hybrid","impactful","incremental","intangible","interactive","intermediate","leading edge","local","logistical","maximized","methodical","mission-critical","mobile","modular","motivating","multimedia","multi-state","multi-tasking","national","needs-based","neutral","next generation","non-volatile","object-oriented","optimal","optimizing","radical","real-time","reciprocal","regional","responsive","scalable","secondary","solution-oriented","stable","static","systematic","systemic","system-worthy","tangible","tertiary","transitional","uniform","upward-trending","user-facing","value-added","web-enabled","well-modulated","zero administration","zero defect","zero tolerance"];

Faker.definitions.catch_phrase_noun = ["ability","access","adapter","algorithm","alliance","analyzer","application","approach","architecture","archive","artificial intelligence","array","attitude","benchmark","budgetary management","capability","capacity","challenge","circuit","collaboration","complexity","concept","conglomeration","contingency","core","customer loyalty","database","data-warehouse","definition","emulation","encoding","encryption","extranet","firmware","flexibility","focus group","forecast","frame","framework","function","functionalities","Graphic Interface","groupware","Graphical User Interface","hardware","help-desk","hierarchy","hub","implementation","info-mediaries","infrastructure","initiative","installation","instruction set","interface","internet solution","intranet","knowledge user","knowledge base","local area network","leverage","matrices","matrix","methodology","middleware","migration","model","moderator","monitoring","moratorium","neural-net","open architecture","open system","orchestration","paradigm","parallelism","policy","portal","pricing structure","process improvement","product","productivity","project","projection","protocol","secured line","service-desk","software","solution","standardization","strategy","structure","success","superstructure","support","synergy","system engine","task-force","throughput","time-frame","toolset","utilisation","website","workforce"];

Faker.definitions.bs_adjective = ["宋 朱熹","沈从文","鲁迅","一","名","众多","出色","优秀","总","一","一","位","一","绿","一","所","一","直接","热情","最大","一","形容词","区别词"];

Faker.definitions.bs_buzz = ["宋 朱熹","沈从文","鲁迅","一","名","众多","出色","优秀","总","一","一","位","一","绿","一","所","一","直接","热情","最大","一","形容词","区别词"];

Faker.definitions.bs_noun = ["回民","小学","教师","党支部","应聘者","青年","小伙子","教师","乡党","支部","乡","人民政府","情况","所","姑娘","文化","夜校","女","青年","文化学","技术","小学","教师","条","牡丹","被单"];

Faker.definitions.domain_suffix = ["com","cn","net","biz","info","name","io","org","biz","tv","me"];

Faker.definitions.lorem = ["论","语","是","一","本","以","记","录","春","秋","时","思","想","家","兼","教","育","家","孔","子","和","其","弟","子","及","再","传","弟","子","言","行","为","主","的","汇","编","又","称","为","论","语","传","记","是","儒","家","重","要","的","经","典","之","一","东","汉","班","固","的","汉","书","艺","文","志","论","语","者","孔","子","应","答","弟","子","时","人","及","弟","子","相","与","言","而","接","闻","于","夫","子","之","语","也","当","时","弟","子","各","有","所","记","夫","子","既","卒","门","人","相","与","辑","而","论","纂","故","谓","之","论","语","论","语","内","容","涉","及","政","治","教","育","文","学","哲","学","以","及","立","身","处","世","的","道","理","等","多","方","面","自","汉","武","帝","罢","黜","百","家","独","尊","儒","术","之","后","它","被","尊","为","五","经","之","輨","辖","六","艺","之","喉","衿","是","研","究","孔","子","及","儒","家","思","想","尤","其","是","原","始","儒","家","思","想","的","第","一","手","资","料","南","宋","时","朱","熹","将","大","学","论","语","孟","子","中","庸","合","为","四","书","使","之","在","儒","家","经","典","中","的","地","位","日","益","提","高","元","代","延","佑","年","间","科","举","开","始","以","四","书","开","科","取","士","此","后","一","直","到","清","末","推","翻","帝","制","废","除","科","举","之","前","论","语","一","直","是","学","子","士","人","推","施","奉","行","的","金","科","玉","律","目","录","结","构","流","传","版","本","衍","生","的","俗","语","和","成","语","历","代","注","解","注","释","参","考","文","献","相","关","条","目","外","部","链","接","结","构","现","存","论","语","共","篇","章","每","篇","篇","名","取","自","正","文","开","头","或","子","曰","子","谓","后","首","句","的","前","二","三","字","按","照","习","惯","通","常","把","前","篇","称","为","上","论","后","篇","称","为","下","论","何","晏","论","语","集","解","学","而","第","一","为","政","第","二","八","佾","第","三","里","仁","第","四","公","冶","长","第","五","雍","也","第","六","述","而","第","七","泰","伯","第","八","子","罕","第","九","乡","党","第","十","先","进","第","十","一","颜","渊","第","十","二","子","路","第","十","三","宪","问","第","十","四","卫","灵","公","第","十","五","季","氏","第","十","六","阳","货","第","十","七","微","子","第","十","八","子","张","第","十","九","尧","曰","第","二","十","流","传","版","本","论","语","自","战","国","前","期","成","书","问","世","以","后","因","秦","始","皇","的","焚","书","坑","儒","政","策","几","乎","惨","遭","灭","顶","之","灾","到","汉","初","朝","廷","明","令","大","收","篇","籍","广","开","献","书","之","路","有","些","冒","着","生","命","危","险","收","藏","下","书","籍","的","人","纷","纷","向","朝","廷","献","书","因","口","口","相","传","再","手","抄","笔","录","辗","转","反","复","字","句","往","往","有","所","差","异","今","日","所","读","之","本","经","历","了","两","次","大","改","造","一","个","是","西","汉","末","年","汉","成","帝","帝","师","张","禹","以","鲁","论","为","主","结","合","齐","论","编","定","的","张","侯","论","有","篇","；","西","元","二","世","纪","中","期","郑","玄","又","以","张","侯","论","为","底","本","根","据","不","同","版","本","进","行","点","校","定","下","论","语","今","本","并","结","集","了","两","汉","间","对","论","语","的","不","同","解","释","不","到","一","百","年","后","何","晏","把","郑","玄","本","及","其","反","对","派","的","观","点","编","成","了","论","语","集","解","何","晏","之","后","南","北","朝","时","代","皇","侃","受","佛","教","的","影","响","编","成","论","语","义","疏","本","西","元","八","至","九","世","纪","唐","朝","的","韩","愈","柳","宗","元","对","郑","玄","何","晏","所","编","之","本","都","持","怀","疑","态","度","要","回","到","原","典","但","由","于","郑","玄","在","世","时","已","与","孔","子","相","差","余","年","论","语","原","典","并","不","可","考","今","本","据","阮","元","校","勘","十","三","经","注","疏","本","统","计","约","万","千","字","论","语","卫","灵","公","衍","生","的","俗","语","和","成","语","岁","寒","然","后","知","松","柏","之","后","凋","小","不","忍","则","乱","大","谋","道","不","同","不","相","为","谋","任","重","而","道","远","三","军","可","夺","帅","也","匹","夫","不","可","夺","志","也","朽","木","不","可","雕","也","成","语","：","三","省","吾","身","见","义","勇","为","既","往","不","咎","不","耻","下","问","三","思","而","后","行","举","一","反","三","任","重","道","远","后","生","可","畏","欲","速","则","不","达","历","代","注","解","论","语","八","佾","朱","熹","四","书","集","注","莫","高","窟","出","土","论","语","维","基","文","库","中","相","关","的","原","始","文","献","：","论","语","维","基","语","录","上","的","相","关","摘","录","：","论","语","三","国","何","晏","论","语","集","解","南","朝","皇","侃","论","语","义","疏","北","宋","邢","昺","论","语","注","疏","南","宋","朱","熹","论","语","章","句","集","注","清","刘","宝","楠","论","语","正","义","程","树","德","论","语","集","释","杨","树","达","论","语","疏","证","钱","穆","论","语","新","解","李","泽","厚","论","语","今","读","李","炳","南","论","语","讲","要","杨","伯","峻","论","语","译","注","南","怀","瑾","论","语","别","裁","杜","道","生","论","语","注","译","王","熙","元","论","语","通","释","徐","志","刚","论","语","通","译","注","释","赵","歧","孟","子","题","辞","历","史","学","家","朱","维","铮","批","评","于","丹","根","本","不","知","论","语","为","何","物","魏","嵩","壹","是","纪","始","作","论","语","一","万","二","千","七","百","字","黄","侃","手","批","白","文","十","三","经","提","要","说","：","郑","耕","老","作","一","万","三","一","作","二","千","七","百","字","欧","阳","公","作","一","万","一","千","七","百","五","字","阮","元","校","勘","的","十","三","经","注","疏","本","统","计","是","一","万","二","千","七","百","字","此","和","郑","耕","老","所","说","相","同","钱","穆","在","孔","子","与","论","语","一","字","说","其","总","字","数","不","出","一","万","六","千","四","百","多","字","参","考","文","献","金","谷","治","译","注","论","语","岩","波","文","库","年","杨","伯","峻","论","语","和","孟","子","中","国","古","代","文","化","史","讲","座","广","西","师","范","大","学","出","版","社","年","谭","家","哲","论","语","与","中","国","思","想","唐","山","出","版","社","年"];

Faker.definitions.phone_formats = ["0###-#######","0###-########","0###-#######-###","#######","########","13#########","15#########","18#########","0##-########","+8613#########","+8615#########","+8618#########","400-####-####","800-####-####","1####"];
var definitions = Faker.definitions;
var Helpers = Faker.Helpers;

if (typeof define == 'function'){
   define(function(){
		return Faker;
   });
}
else if(typeof module !== 'undefined' && module.exports) {
	module.exports = Faker;
}
else {
	window.Faker = Faker;
}

}()); // end Faker closure