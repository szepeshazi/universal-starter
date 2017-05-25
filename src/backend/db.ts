// Our API for demos only
export const fakeDataBase = {
  get() {
    let res = { data: 'This fake data came from the db on the server.' };
    return Promise.resolve(res);
  },

  getPages() {
    let res = {
      data: [
        {
          id: 1,
          title: 'Such wow',
          imageUrl: 'https://pbs.twimg.com/profile_images/582992433404731393/KPQajYDu.png',
          teaser: '<p>oh my lorem! wow. much ipsum. very doge, so consectetur! such amet! such text, very swag! want full, yes master</p>',
          body: `<h4 id="mcetoc_1bgva70ht0">Need dolor</h4>
            <p>wow! <strong>want layout</strong>. much full. very word! want lorem, yes master doge! much adipiscing! many design! many text, wow. rate me! wow, go full! i can haz swag! wow. very design. very doge, oh my ipsum! very doge, very design. i iz cute?. much sit, wow! oh my aenean, many text, go swag! such word, i can haz swag! much ipsum. very layout, oh my aenean, yes master doge! plz text. such amet! go full! plz lorem! yes master doge. wow. wow! so consectetur! wow! i iz cute?! many mattis, yes master doge, much ipsum. such amet! want layout.</p>
            <ul>
            <li>need design</li>
            <li>such layout</li>
            <li>very design</li>
            </ul>
            <p><br />yes master doge. wow. much full. such amet! much sit, oh my lorem! wow. much ipsum. very doge, so consectetur! such amet! such text, very swag! want full, yes master doge! wow! very layout, very design. such layout, very design. oh my aenean, wow, want full, go full! wow! go swag! plz text. oh my ipsum! want lorem, such elit! i can haz swag! much doge. go swag! such word, very doge, very swag! want lorem, very swag! plz lorem! so ipsum! plz text. much doge. go swag! i can haz swag! go full! many design! oh my aenean, such word, much doge. much full.&nbsp;</p>
            <p><iframe src="https://player.vimeo.com/video/85372402" width="640" height="290" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></p>
            <p>&nbsp;</p>`
        },
        {
          id: 2,
          title: 'Much master',
          imageUrl: 'https://pbs.twimg.com/profile_images/429121054364037121/2HBr4_HX_reasonably_small.png',
          teaser: '<p>very swag! want full, yes master my lorem! wow. much ipsum. very doge, so consectetur! such amet! such text,</p>',
          body: `<h4 id="mcetoc_1bgva70ht0">Need dolor</h4>
            <p>wow! <strong>want layout</strong>. much full. very word! want lorem, yes master doge! much adipiscing! many design! many text, wow. rate me! wow, go full! i can haz swag! wow. very design. very doge, oh my ipsum! very doge, very design. i iz cute?. much sit, wow! oh my aenean, many text, go swag! such word, i can haz swag! much ipsum. very layout, oh my aenean, yes master doge! plz text. such amet! go full! plz lorem! yes master doge. wow. wow! so consectetur! wow! i iz cute?! many mattis, yes master doge, much ipsum. such amet! want layout.</p>
            <ul>
            <li>need design</li>
            <li>such layout</li>
            <li>very design</li>
            </ul>
            <p><br />yes master doge. wow. much full. such amet! much sit, oh my lorem! wow. much ipsum. very doge, so consectetur! such amet! such text, very swag! want full, yes master doge! wow! very layout, very design. such layout, very design. oh my aenean, wow, want full, go full! wow! go swag! plz text. oh my ipsum! want lorem, such elit! i can haz swag! much doge. go swag! such word, very doge, very swag! want lorem, very swag! plz lorem! so ipsum! plz text. much doge. go swag! i can haz swag! go full! many design! oh my aenean, such word, much doge. much full.&nbsp;</p>
            <p><iframe src="https://player.vimeo.com/video/85372402" width="640" height="290" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></p>
            <p>&nbsp;</p>`
        },
        {
          id: 3,
          title: 'Wow very swag',
          imageUrl: 'https://p.memecdn.com/avatars/s_309172_555098d9d9a2c.jpg',
          teaser: '<p>wow, go full! i can haz swag! wow. very design. very doge, oh my ipsum! very doge</p>',
          body: `<h4 id="mcetoc_1bgva70ht0">Need dolor</h4>
            <p>wow! <strong>want layout</strong>. much full. very word! want lorem, yes master doge! much adipiscing! many design! many text, wow. rate me! wow, go full! i can haz swag! wow. very design. very doge, oh my ipsum! very doge, very design. i iz cute?. much sit, wow! oh my aenean, many text, go swag! such word, i can haz swag! much ipsum. very layout, oh my aenean, yes master doge! plz text. such amet! go full! plz lorem! yes master doge. wow. wow! so consectetur! wow! i iz cute?! many mattis, yes master doge, much ipsum. such amet! want layout.</p>
            <ul>
            <li>need design</li>
            <li>such layout</li>
            <li>very design</li>
            </ul>
            <p><br />yes master doge. wow. much full. such amet! much sit, oh my lorem! wow. much ipsum. very doge, so consectetur! such amet! such text, very swag! want full, yes master doge! wow! very layout, very design. such layout, very design. oh my aenean, wow, want full, go full! wow! go swag! plz text. oh my ipsum! want lorem, such elit! i can haz swag! much doge. go swag! such word, very doge, very swag! want lorem, very swag! plz lorem! so ipsum! plz text. much doge. go swag! i can haz swag! go full! many design! oh my aenean, such word, much doge. much full.&nbsp;</p>
            <p><iframe src="https://player.vimeo.com/video/85372402" width="640" height="290" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></p>
            <p>&nbsp;</p>`
        },
      ]
    };
    return Promise.resolve(res);
  }

};
