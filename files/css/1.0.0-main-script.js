document.body.innerHTML+= `<div class="spinner-between-pages" id="preloaderBetweenPages"> <div class="double-bounce1-between-pages"></div><div class="double-bounce2-between-pages"></div></div><style>.spinner-between-pages{display: none; z-index: 99; position: fixed; height: 2em; width: 2em; overflow: show; margin: auto; top: 0; left: 0; bottom: 0; right: 0; text-align: center; width: 40px; height: 40px;}.double-bounce1-between-pages, .double-bounce2-between-pages{width: 100%; height: 100%; border-radius: 50%; background-color: #23914d; opacity: 0.6; position: absolute; top: 0; left: 0; -webkit-animation: sk-bounce-between-pages 2.0s infinite ease-in-out; animation: sk-bounce-between-pages 2.0s infinite ease-in-out;}.double-bounce2-between-pages{-webkit-animation-delay: -1.0s; animation-delay: -1.0s;}@-webkit-keyframes sk-bounce-between-pages{0%, 100%{-webkit-transform: scale(0.0)}50%{-webkit-transform: scale(1.0)}}@keyframes sk-bounce-between-pages{0%, 100%{transform: scale(0.0); -webkit-transform: scale(0.0);}50%{transform: scale(1.0); -webkit-transform: scale(1.0);}}</style><script type="text/javascript">if(!!(document.getElementById("comp-kjbocjmcitemsContainer"))){document.getElementById("comp-kjbocjmcitemsContainer").addEventListener("click", ()=>{console.log("Navigation menu clicked!!!!!"); var preload=document.getElementById("preloaderBetweenPages"); preload.style.display="block"; (function(){var loading=0; var id=setInterval(frame, 64); function frame(){if(loading==100){clearInterval(id);}else{loading=loading + 1; if(loading==90){preload.style.opacity="0"; preload.style.display="none";}}}})();});}if(!!(document.getElementById("comp-t85mur39"))){document.getElementById("comp-t85mur39").addEventListener("click", ()=>{console.log("Navigation menu clicked!!!!!"); var preload=document.getElementById("preloaderBetweenPages"); preload.style.display="block"; (function(){var loading=0; var id=setInterval(frame, 64); function frame(){if(loading==100){clearInterval(id);}else{loading=loading + 1; if(loading==90){preload.style.opacity="0"; preload.style.display="none";}}}})();});}</script>`;
