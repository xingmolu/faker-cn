#  Faker-zh-cn.js - 生成一堆假的（看起来像真的）数据

![Faker](logo.png)

## 用法
### 在node.js环境中
      var Faker = require('faker-zh-cn');
      var randomName = Faker.Name.findName(); // 萧若南
      var randomEmail = Faker.Internet.email(); // gaoge.jian@yulong.com
      var randomCard = Faker.Helpers.createCard(); // random contact card containing many properties
## API

### Name

* firstname（已本地化）
* lastName（已本地化）
* findName（已本地化）

### Address

* zipCode（已本地化）
* zipCodeFormat（已本地化）
* city（已本地化）
* streetName（已本地化）
* streetAddress（已本地化）
* secondaryAddress（已本地化）
* brState
* ukCounty
* ukCountry
* cnState（已本地化）
* latitude
* longitude

### PhoneNumber
* phoneNumber（已本地化）
* phoneNumberFormat（已本地化）

### Internet

* email（已本地化）
* userName（已本地化）
* domainName（已本地化）
* domainWord（已本地化）
* ip

### Company

* suffixes（已本地化）
* companyName（已本地化）
* companySuffix（已本地化）
* catchPhrase
* bs（已本地化）

### Lorem

* words（已本地化）
* sentence（已本地化）
* sentences（已本地化）
* paragraph（已本地化）
* paragraphs（已本地化）

### Helpers

* randomNumber
* randomize
* slugify（已本地化）
* replaceSymbolWithNumber
* shuffle
* createCard
* userCard

### random

* number
* array_element
* city_prefix（已本地化）
* city_suffix（已本地化）
* street_suffix（已本地化）
* br_state
* br_state_abbr
* cn_state（已本地化）
* cn_state_abbr（已本地化）
* uk_county
* uk_country
* first_name（已本地化）
* last_name（已本地化）
* name_prefix（已本地化）
* name_suffix（已本地化）
* catch_phrase_adjective
* catch_phrase_descriptor
* catch_phrase_noun
* bs_adjective（已本地化）
* bs_buzz（已本地化）
* bs_noun（已本地化）
* phone_formats（已本地化）
* domain_suffix（已本地化）

### definitions

* first_name（已本地化）
* last_name（已本地化）
* name_prefix（已本地化）
* name_suffix（已本地化）
* br_state
* br_state_abbr
* cn_state（已本地化）
* cn_state_abbr（已本地化）
* city_prefix（已本地化）
* city_suffix（已本地化）
* street_suffix（已本地化）
* uk_county
* uk_country
* catch_phrase_adjective
* catch_phrase_descriptor
* catch_phrase_noun
* bs_adjective（已本地化）
* bs_buzz（已本地化）
* bs_noun（已本地化）
* domain_suffix（已本地化）
* lorem（已本地化）
* phone_formats（已本地化）

## 测试
为了减小合并未来版本的工作量，我们暂时没有移植测试。
## 作者
####Matthew Bergman & Marak Squires
Heavily inspired by Benjamin Curtis's Ruby Gem [Faker](http://faker.rubyforge.org/) and Perl's [Data::Faker](http://search.cpan.org/~jasonk/Data-Faker-0.07/lib/Data/Faker.pm)
####Michael Yin （中文本地化）
####[己所不欲](http://weibo.com/u/1766294634) （友情配图）
<br/>
Copyright (c) 2010 Matthew Bergman & Marak Squires http://github.com/marak/Faker.js/
<br/>
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
<br/>
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
<br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.