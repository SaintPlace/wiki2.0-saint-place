const path = require('path');

module.exports = {
    title: 'Wiki | SaintPlace',
    description: 'Документация по использованию маркетплейса SaintPlace.ru',
    head: [
        ['meta', { name: 'theme-color', content: '#7d30a5' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],
    locales: {
        '/': {
            lang: 'ru-RU'
        }
    },
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5']
    },
    themeConfig: {
        editLinks: false,
        docsDir: '',
        lastUpdated: false,
        search: false,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Найти ...',
        nav: [
            {
                text: 'SaintPlace',
                link: 'https://saint-place.ru'
            }
        ],
        sidebar: [{
            type: 'group',
            title: 'Покупателям',
            collapsable: !0,
            sidebarDepth: 3,
            children: [{
                type: 'group',
                title: 'Регистрация',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/pokupatelyam/registraciya/kak-zaregistrirovatsya-na-saintplace',
                    '/pokupatelyam/registraciya/kak-vojti-v-svoyu-uchyotnuyu-zapis',
                    '/pokupatelyam/registraciya/zachem-mne-registrirovatsya-i-vkhodit-na-saintplace',
                    '/pokupatelyam/registraciya/chto-delat-esli-zabyl-parol-ot-uchyotnoj-zapisi'
                ]
            },
            {
                type: 'group',
                title: 'Заказы',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/pokupatelyam/zakazy/kak-najti-nuzhnyj-tovar',
                    '/pokupatelyam/zakazy/kak-oformit-zakaz',
                    '/pokupatelyam/zakazy/razdelenie-zakaza-na-neskolko-posylok',
                    '/pokupatelyam/zakazy/informaciya-o-moikh-zakazakh',
                    '/pokupatelyam/zakazy/otmena-zakaza',
                    '/pokupatelyam/zakazy/proverka-zakaza-pri-poluchenii',
                    '/pokupatelyam/zakazy/mozhno-li-dobavit-promo-kod-vo-vremya-oformleniya-zakaza',
                    '/pokupatelyam/zakazy/mozhno-li-udalit-tovar-iz-korziny-vo-vremya-oformleniya-zakaza',
                    '/pokupatelyam/zakazy/chto-delat-esli-sroki-dostavki-vyshli-a-zakaz-tak-i-ne-prishyol',
                    '/pokupatelyam/zakazy/kak-otslezhivat-dostavku-zakaza',
                    '/pokupatelyam/zakazy/kakie-sposoby-oplaty-dostupny-v-magazine',
                    '/pokupatelyam/zakazy/kak-najti-tovary-so-skidkoj',
                    '/pokupatelyam/zakazy/statusy-zakazov',
                    '/pokupatelyam/zakazy/promo-akcii',
                    '/pokupatelyam/zakazy/pokupka-tovarov-iz-za-rubezha',
                    '/pokupatelyam/zakazy/kupon-na-besplatnuyu-dostavku-ot-saintplace'
                ]
            },
            {
                type: 'group',
                title: 'Корзина',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/pokupatelyam/korzina/kak-dobavit-tovar-v-korzinu',
                    '/pokupatelyam/korzina/kak-dobavit-neskolko-tovarov-v-korzinu',
                    '/pokupatelyam/korzina/kak-udalit-tovary-iz-korziny',
                    '/pokupatelyam/korzina/kak-upravlyat-korzinoj'
                ]
            },
            {
                type: 'group',
                title: 'Доставка',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/pokupatelyam/dostavka/kak-rasschityvaetsya-stoimost-dostavki',
                    '/pokupatelyam/dostavka/kak-uznat-gde-nakhoditsya-punkt-vydachi-zakazov',
                    '/pokupatelyam/dostavka/kak-uznat-kogda-priedet-kurer',
                    '/pokupatelyam/dostavka/kakie-sposoby-dostavki-dostupny-v-magazine'
                ]
            },
            {
                type: 'group',
                title: 'Возврат',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/pokupatelyam/vozvrat/kak-oformit-vozvrat-tovara',
                    '/pokupatelyam/vozvrat/pravila-vozvrata-tovarov-nadlezhashchego-kachestva',
                    '/pokupatelyam/vozvrat/pravila-vozvrata-tovarov-nenadlezhashchego-kachestva'
                ]
            }
            ]
        },
        {
            title: 'Продавцам',
            collapsable: !0,
            sidebarDepth: 3,
            children: [
                '/prodavcam/registraciya-v-kachestve-prodavca',
                '/prodavcam/nasha-missiya',
                '/prodavcam/kak-nachat-prodavat',
                '/prodavcam/khotite-prodavat-cherez-set-internet',
                '/prodavcam/trebovaniya-k-reklamnym-materialam',
                '/prodavcam/bezopasnost-platezhej',
                '/prodavcam/informaciya-dlya-pravoobladatelej',
                '/prodavcam/usloviya-zakaza-i-dostavki-tovarov',
                '/prodavcam/polzovatelskoe-soglashenie',
                '/prodavcam/chastye-voprosy-i-otvety',
                '/prodavcam/vsyo-chto-svyazano-s-ehdo-na-saintplace',
                '/prodavcam/billing-v-saintplace',
                '/prodavcam/rekomendacii-po-otrazheniyu-v-bukhgalterskom-uchyote',
                '/prodavcam/tarify-saintplace',
                '/prodavcam/kredit-i-rassrochka',
                '/prodavcam/obyazatelnaya-markirovka-tovarov',
                '/prodavcam/platnaya-tekhnicheskaya-podderzhka',
                '/prodavcam/avtomaticheskaya-otmena-zakaza',
                '/prodavcam/pochemu-proiskhodit-blokirovka-tovara-ili-vsego-magazina-i-kak-snyat-blokirovku',
                '/prodavcam/o-servise',
                '/prodavcam/instrukcii/integraciya-s-mojsklad'
            ]
        },
        {
            title: 'Инструкции продавцам',
            collapsable: !0,
            sidebarDepth: 3,
            children: [{
                type: 'group',
                title: 'Начало работы',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/prodavcam/instrukcii/nachalo-raboty/panel-administratora',
                    '/prodavcam/instrukcii/nachalo-raboty/nastrojka-mini-magazina',
                    '/prodavcam/instrukcii/nachalo-raboty/trebovaniya-k-tovaram',
                    '/prodavcam/instrukcii/nachalo-raboty/administratory-prodavca',
                    '/prodavcam/instrukcii/nachalo-raboty/zhurnal-sobytij',
                    '/prodavcam/instrukcii/nachalo-raboty/oshibki-na-sajte',
                    '/prodavcam/instrukcii/nachalo-raboty/globalnye-promo-akcii'
                ]
            }, {
                type: 'group',
                title: 'Доставка и оплата',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/prodavcam/instrukcii/dostavka/nastrojka-sposoba-dostavki',
                    '/prodavcam/instrukcii/dostavka/dopolnitelnye-nastrojki-dostavki',
                    '/prodavcam/instrukcii/dostavka/nastrojka-sposoba-oplaty'
                ]
            }, {
                type: 'group',
                title: 'Каталог и товары',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/prodavcam/instrukcii/tovary/prostoe-sozdanie-tovara',
                    '/prodavcam/instrukcii/tovary/svojstva-tovara',
                    '/prodavcam/instrukcii/tovary/variacii-tovarov',
                    '/prodavcam/instrukcii/tovary/stranica-s-tovarami',
                    '/prodavcam/instrukcii/tovary/analitika',
                    '/prodavcam/instrukcii/tovary/kategorii',
                    '/prodavcam/instrukcii/tovary/fajly'
                ]
            }, {
                type: 'group',
                title: 'Заказы',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/prodavcam/instrukcii/zakazy/obrabotka-zakazov',
                    '/prodavcam/instrukcii/zakazy/parametry-zakaza',
                    '/prodavcam/instrukcii/zakazy/statusy-zakazov',
                    '/prodavcam/instrukcii/zakazy/redaktirovanie-dannykh-zakaza',
                    '/prodavcam/instrukcii/zakazy/spisok-zakazov',
                    '/prodavcam/instrukcii/zakazy/opoveshcheniya-v-saintplace',
                    '/prodavcam/instrukcii/zakazy/otchety-o-prodazhakh',
                    '/prodavcam/instrukcii/zakazy/generator-ssylok-tovarov-dlya-korziny',
                    '/prodavcam/instrukcii/zakazy/kupony-dlya-prodavcov'
                ]
            }, {
                type: 'group',
                title: 'Импорт и экспорт',
                collapsable: !0,
                sidebarDepth: 3,
                children: [
                    '/prodavcam/instrukcii/import-export/import-tovarov-yml'
                ]
            }]
        }
        ],
        algolia: {
            apiKey: '061c8ea0d384bd73a6bf30f4d3177f0c',
            indexName: 'saint-place',
            appId: 'UMJI4SBM14'
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/search', true],
        ['sitemap', {
            hostname: 'https://wiki.saint-place.ru'
        }]
    ],
    extraWatchFiles: ['.vuepress/config/**'],
}
