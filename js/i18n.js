const lngs = {
    en: { nativeName: 'English' },
    cn: { nativeName: 'Chinese' }
  };
  
  
  const rerender = () => {
    $('body').localize();
  }
  
  
  $(function () {
      Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $('#languageSwitcher').append(opt);
      });
  
  const isInitialized = localStorage.getItem('i8nInitialized');
  
    $('#languageSwitcher').change(() => {
    i18next
    .use(i18nextHttpBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
          debug: true,
          fallbackLng: 'en',
          backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json'
          }
        //   resources: {
        //     en: {
        //       translation: {
        //           text: {
        //           h1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        //       }
        //     }
        //     },
        //     cn: {
        //       translation: {
        //           text: {
        //         h1: '完論芸嘘手発景産航寺社業山雪助標展咋見。能呼諾日社全朝同者意用知東平会淡外。政代掲対別瀬日輸無場知東下力検方動。番二惹改飛準界化紙彩胚刊文図歩夜捕調。往日追出怪柴的部戦戦設内億百。芸開更全文側開鮮竹模月回博掲後。球向主第児内遭身訴会養遠受作報現劣塾写目。能線金場主直死家社切主労文社目界駒。父仕立下情点尽断育氷紀模模'
        //       }
        //     }
        //     }
        //   }
        }, (err, t) => {
          if (err) return console.error('Error ----->',err);
          jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        });
                const chosenLng = $(this).find("option:selected").attr('value');
                i18next.changeLanguage(chosenLng, () => {
                  rerender();
                });
         });
  
  if(isInitialized == null || isInitialized != 'true'){
    i18next
    .use(i18nextHttpBackend)
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: true,
        fallbackLng: 'en',
        backend: {
          loadPath: 'locales/cn/{{ns}}.json'
        }
        // resources: {
        //     en: {
        //       translation: {
        //           text: {
        //           h1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        //       }
        //     }
        //     },
        //     cn: {
        //       translation: {
        //           text: {
        //         h1: '完論芸嘘手発景産航寺社業山雪助標展咋見。能呼諾日社全朝同者意用知東平会淡外。政代掲対別瀬日輸無場知東下力検方動。番二惹改飛準界化紙彩胚刊文図歩夜捕調。往日追出怪柴的部戦戦設内億百。芸開更全文側開鮮竹模月回博掲後。球向主第児内遭身訴会養遠受作報現劣塾写目。能線金場主直死家社切主労文社目界駒。父仕立下情点尽断育氷紀模模'
        //       }
        //     }
        //     }
        //   }
      }, (err, t) => {
        if (err) return console.error('Error ------>>>>',err);
        localStorage.setItem('i8nInitialized',true)
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        rerender();
      });
      }
  });