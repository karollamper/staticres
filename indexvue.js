const VueApp = {
    data() {
      return {
          emoji:'😇',
          userLanguage:'',
          isRainStarted: false,
          imageslist:[
              'https://s21.ax1x.com/2024/06/14/pkdLmJe.png',
              'https://s21.ax1x.com/2024/06/14/pkdLeiD.png',
          ],
          person:{
              errormessage:'无法访问此人',errordescription:'找不到这个人的DNS地址',sug1:'请尝试以下操作',sug2:'陪他聊天，哄他开心',sug3:"给他发个红包",sug4:'掌嘴'
          },
          cards:[
              {id:'card1',clas:'card',cstyle:'width: 100%;height: 100%;',icon: `<div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: space-evenly;">
                  <img src="https://s21.ax1x.com/2024/08/02/pkX72Mq.png" alt="" style="transform: scale(0.8);">
                  <img src="https://s21.ax1x.com/2024/08/02/pkX7Rs0.png" alt="" style="width:50px;height:50px;">
                  <img src="https://s21.ax1x.com/2024/08/02/pkj9bNR.png" alt="" style="width:94px;height:94px;"></div>`,
                  ccid:'cc1',ctitle:'文档库',description:`基于<a href="https://github.com/docsifyjs/docsify/">docsify</a>和<a href="https://pandao.github.io/editor.md/">Editor.md</a>,支持在线md编辑保存生成，快速拥有属于自己的文档网页。`,
                  url:'https://tools.justok.top/ut/doced',bid:'b1',gosvg:'🚀'
              },
              {id:'qcardsid',clas:'qcards',
                  qcards:[
                      {qclas:'qcard',qid:'qc1',icon:`<img src="https://s21.ax1x.com/2024/08/02/pkX7hZT.png">`,qstyle:'transform: scale(0.3)',qcid:'qco1',qtitle:'Looptap',description:`<a href="https://github.com/vasanthv/looptap">Looptap</a> 消磨时间的小游戏，把球停在有颜色区域。`,url:'/pj/looptap/'},
                      {qclas:'qcard',qid:'qc2',icon:`<img src="https://s21.ax1x.com/2024/08/02/pkX7yGj.png">`,qstyle:'transform: scale(0.3)',qcid:'qco2',qtitle:'ugly-avatar',description:`<a href="https://github.com/txstc55/ugly-avatar">ugly-avatar</a> 一个丑头像生成器。`,url:'/pj/ugly-avatar/'},
                      {qclas:'qcard'},
                      {qclas:'qcard'},
                      {qclas:'qcard'},
                      {qclas:'qcard'},
                  ]
              },
              {id:'card2',clas:'card',icon: `<img src="https://alist.nn.ci/logo.png" style="transform: scale(0.1);">`,ccid:'cc2',ctitle:'AList',description:`<a href="https://github.com/alist-org/alist">AList</a> 一个支持多种存储的文件列表程序，使用 Gin 和 Solidjs。`,url:'https://pan.justok.top',bid:'b2',gosvg:'🗂️'},
              {id:'card3',clas:'card',icon: `<img src="https://www.maccms.plus/logo.png" style="transform: scale(0.3);">`,ccid:'cc3',ctitle:'MacCmsV10',description:`<a href="https://github.com/magicblack/maccms10">苹果cmsV10</a> 基于ThinkPHP和Layui的多功能开源免费内容管理系统，可以用于搭建专业的视频网站、图片素材站、网址导航站等等。`,url:'https://maccms.justok.top',bid:'b3',gosvg:'📺️'},
              {id:'card4',clas:'card',icon: `<img src="https://waline.js.org/logo.png" style="transform: scale(0.17);">`,ccid:'cc4',ctitle:'Waline',description:` <a href="https://github.com/walinejs/waline">Waline</a> 一款简洁、安全的评论系统。一款从 Valine 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine。`,url:'waline',bid:'b4',gosvg:'📭️'},
              {id:'card5',clas:'card',icon: `<img src="https://s21.ax1x.com/2024/08/02/pkX7WLV.png" style="transform: scale(0.4);">`,ccid:'cc5',ctitle:'Email',description:`karol@justok.top<br>karolspark666@outlook.com<br>如果你想搭建一些服务，这里可以提供帮助，若需要也可免费提供本站二级域名及解析。`},
              {id:'card6',clas:'card',icon: `<img src="https://vip.helloimg.com/i/2024/07/28/66a665032740a.gif"/>`},
          ]
        
      };
    },
    mounted: function() {
      var colors = ['linear-gradient(-225deg,#E3FDF5 ,#FFE6FA 100%)', 'linear-gradient(-225deg,#FFFEFF ,#D7FFFE 100%)', 'linear-gradient(135deg,#ddebfe ,#f2f2fe 100%)', 'linear-gradient(#c4f4fe ,#fdefbe 100%)']; // 可选的背景色列表
      var randomColor = colors[Math.floor(Math.random() * colors.length)]; // 随机选择一个颜色
      document.body.style.backgroundImage = randomColor; 
      this.userLanguage = navigator.language || navigator.userLanguage;
      if (this.userLanguage.startsWith('zh')) { } else {
          this.person.errormessage = 'Unable to access this person';
          this.person.errordescription = 'No DNS address for this person';
          this.person.sug1 = 'Please try the following';
          this.person.sug2 = 'Chat with him and make him happy';
          this.person.sug3 = 'Send him a red envelope';
          this.person.sug4= 'To slap';
          this.cards[0].ctitle = 'Web Document';
          this.cards[0].description = `Based on <a href="https://github.com/docsifyjs/docsify/">docsify</a> and <a href="https://pandao.github.io/editor.md/">Editor.md</a>,quickly have your own web page.`;
          this.cards[2].description = `<a href="https://github.com/alist-org/alist">AList</a> A file list program that supports multiple storage, using Gin and Solidjs.`;
          this.cards[3].description = `<a href="https://github.com/magicblack/maccms10">MacCmsV10</a> Multifunctional open source free content management system based on ThinkPHP and Layui.`;
          this.cards[4].description = `<a href="https://github.com/walinejs/waline">Waline</a> A concise and safe comment system. A back-end review system derived from Valine.`;
          this.cards[5].description = `karol@justok.top<br>karolspark666@outlook.com<br>If you want to build something, here can provide help, free site second level domain name and resolution.`;
          this.cards[1].qcards[0].description = `<a href="https://github.com/vasanthv/looptap">Looptap</a> Mini games to kill time, park the ball in the colored area. `;
          this.cards[1].qcards[1].description = `<a href="https://github.com/txstc55/ugly-avatar">ugly-avatar</a> An ugly avatar generator. `;
      }
      this.preloadImages(this.imageslist);
      const waline = Waline.init({
          el: '#waline',
          serverURL: 'https://waline.justok.top/',
          emoji: [
              'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
              'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
              'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
              'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba'
          ],
      });
      setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "";
      }, "500");  
    },
    methods: {
      openLink(url) {
        if(url=="waline"){
            const walineelement = document.getElementById("waline");
            if (walineelement) {
                walineelement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'     
                });
            }
        }else{
            window.open(url);
        }
          
      },
      preloadImages(imagelist) {
          for (let i = 0; i < imagelist.length; i++) {
              const img = new Image();
              img.src = imagelist[i];
          }
      },
      createRedEnvelope(ilist, sp) {
          const rain = document.querySelector('.rain');
          const drop = document.createElement('div');
          drop.className = 'drop';
          const randomImage = ilist[Math.floor(Math.random() * ilist.length)];
          drop.style.backgroundImage = `url(${randomImage})`;
          drop.style.left = Math.random() * 100 + 'vw';
          drop.style.animationDuration = Math.random() * 3 + sp + 's';
          drop.style.opacity = Math.random() * 0.5 + 0.5;
          rain.appendChild(drop);
          setTimeout(() => { rain.removeChild(drop) }, parseFloat(drop.style.animationDuration) * 1000);
      },
      startRedEnvelopeRain(typeid) {
          if (!this.isRainStarted && typeid == 2) {
              this.isRainStarted = true;
              document.body.style.overflow='hidden';
              this.emoji = '😚';
              if (this.userLanguage.startsWith('zh')) {
                  this.person.errormessage = '好人一生平安';
              } else {
                  this.person.errormessage = 'Gods bless kind people';
              }
              for (let i = 0; i < 100; i++) {
                  setTimeout(this.createRedEnvelope, i * 80, this.imageslist, 2);
              }
              this.reback(100 * 80 + 3000);
          } else if (!this.isRainStarted && typeid == 3) {
              this.emoji = '🤡';
              if (this.userLanguage.startsWith('zh')) {
                  this.person.errormessage = '大胆!';
              } else {
                  this.person.errormessage = 'Bold!';
              }
              this.reback(1000);
          } else if (!this.isRainStarted && typeid == 1) {
              this.emoji = '🤗';
              if (this.userLanguage.startsWith('zh')) {
                  this.person.errormessage = '还是你对我最好😉';
              } else {
                  this.person.errormessage = 'You still treat me the best😉';
              }
              this.reback(1000);
          }
      },
      reback(t) {
          setTimeout(() => {
              this.isRainStarted = false;
              document.body.style.overflow='visible';
              this.emoji = '😇';
              if (this.userLanguage.startsWith('zh')) {
                  this.person.errormessage = '无法访问此人';
              } else {
                  this.person.errormessage = 'Unable to access this person';
              }
          }, t);
      }
    }
  };
  Vue.createApp(VueApp).mount('#app')