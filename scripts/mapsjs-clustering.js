H.util.eval("ci.prototype.he=ca(1,function(){return this.b});function Ko(){}Ko.prototype.m=function(){};Ko.prototype.P=function(){};Ko.prototype.l=function(){};q(\"H.clustering.ICluster.prototype.forEachEntry\",Ko.prototype.l);Ko.prototype.j=function(){};q(\"H.clustering.ICluster.prototype.forEachDataPoint\",Ko.prototype.j);function Lo(a,b,c){this.u=this.o=c;this.b=[];this.g=0;this.a=Ne(a,b,!0)}q(\"H.clustering.grid.Cluster\",Lo);Lo.prototype.Ac=function(a){this.c||(this.c=$b(a));this.g+=a.wt||1;this.b.push(a)};Lo.prototype.he=function(){return this.b};Lo.prototype.getPosition=function(){return this.c};Lo.prototype.getPosition=Lo.prototype.getPosition;Lo.prototype.tb=function(){return this.g};Lo.prototype.getWeight=Lo.prototype.tb;Lo.prototype.i=re;Lo.prototype.isCluster=Lo.prototype.i;Lo.prototype.f=function(){return this.o};\nLo.prototype.getMinZoom=Lo.prototype.f;Lo.prototype.m=function(){return this.u};Lo.prototype.getMaxZoom=Lo.prototype.m;Lo.prototype.P=function(){return this.a};Lo.prototype.getBounds=Lo.prototype.P;Lo.prototype.l=function(a){this.j(a)};Lo.prototype.forEachEntry=Lo.prototype.l;Lo.prototype.j=function(a){var b=this;if(!ra(a))throw new C(this.j,0,a);this.b.forEach(function(c){a(new Mo(c,b.o+1))})};Lo.prototype.forEachDataPoint=Lo.prototype.j;function No(a){oc.call(this);this.a=[];var b;a?Ca(b={},Oo,a):b=Oo;this.g=b;oc.call(this)}v(No,oc);var Po={cancel:jc},Qo={clusters:[],noisePoints:[]},Oo={projection:Bg,min:0,max:22,eps:32,minWeight:2};p=No.prototype;p.Tb=function(a){this.a=a;this.b=!0};p.Sa=function(a){this.a.push(a);this.b=!0};p.Kf=function(a){this.a=this.a.concat(a);this.b=!0};p.ne=function(a){this.a=this.a.filter(function(b){return b!==a});this.b=!0};p.D=function(){No.v.D.call(this);this.a=null};p.rg=jc;function Mo(a,b){this.a=a;this.b=b}q(\"H.clustering.grid.NoisePoint\",Mo);Mo.prototype.getPosition=function(){return $b(this.a)};Mo.prototype.getPosition=Mo.prototype.getPosition;Mo.prototype.tb=function(){return this.a.wt};Mo.prototype.getWeight=Mo.prototype.tb;Mo.prototype.i=se;Mo.prototype.isCluster=Mo.prototype.i;Mo.prototype.f=function(){return this.b};Mo.prototype.getMinZoom=Mo.prototype.f;Mo.prototype.getData=function(){return this.a.data};Mo.prototype.getData=Mo.prototype.getData;function Ro(a){No.call(this,a)}v(Ro,No);\nRo.prototype.Te=function(a){var b=this.g,c=b.min,d=b.max,e=[],f=[],g;if(this.b){for(g=this.a;c<=d;c++){for(var h=c,k=g,l=e,m=f,n=void 0,r=n=void 0,t=void 0,u=b.eps,y=b.projection,J=b.minWeight,U=t=void 0,da=void 0,ea=t=void 0,jb=k.length,la=void 0,Ia=Math.pow(2,h+8),ya=void 0,Jc=void 0,ya=void 0,Mf=[];n=k[--jb];)if(!n.bf){ea=y.gb(n).scale(Ia).floor();r=Ia;U=ea.x;da=ea.y;for(la=Mf.length;la--;)ya=Mf[la],t=ya.getPosition(),ya.af||(ya.af=y.gb(t).scale(Ia).floor()),t=ya.af,t=t.distance(ea),t<r&&(r=t,\nJc=ya);Jc&&Jc.P().Fc(n)||(Jc=new Lo(y.oc({x:(U-u)/Ia,y:(da-u)/Ia}),y.oc({x:(U+u)/Ia,y:(da+u)/Ia}),h),Mf.push(Jc));Jc.Ac(n);Jc=null}for(jb=Mf.length;jb--;)if(ya=Mf[jb],n=ya.tb(),n<J)for(ya=ya.he(),la=ya.length;n=ya[--la];)m.push(new Mo(n,h)),n.bf=!0;else l.push(ya)}c=0;for(d=g.length;c<d;c++)delete g[c].bf;this.b=!1;a({clusters:e,noisePoints:f})}return Po};function So(a){this.a=a;a=document.createElement(\"canvas\");var b=a.getContext(\"2d\"),c=a.width=a.height=14*this.a;b.beginPath();b.strokeStyle=\"#FFFFFF\";b.fillStyle=\"#1080DD\";b.arc(c/2,c/2,6*this.a,0,2*Math.PI,!1);b.fill();b.lineWidth=1;b.stroke();this.j=new O(a,{size:{w:c,h:c},anchor:{x:c/2,y:c/2}});this.b={};this.c={}}q(\"H.clustering.theme.Circular\",So);\nfunction To(a,b,c){var d,e,f=document.createElement(\"canvas\"),g=f.getContext(\"2d\");b*=a.a;d=b+\":\"+c;f.width=f.height=b;(e=a.b[d])?g.putImageData(e,0,0):(e=b/2,g.beginPath(),g.strokeStyle=\"rgba(\"+c+\",0.2)\",g.fillStyle=\"rgba(\"+c+\",1)\",g.arc(e,e,e/5*3,0,2*Math.PI,!1),g.fill(),g.lineWidth=e/5*4,g.stroke(),a.b[d]=g.getImageData(0,0,b,b));return f}\nSo.prototype.f=function(a){var b,c,d=a.tb(),e,f,g;b=this.c[d];b||(10>d?(b=To(this,28,\"118,209,0\"),e={x:11,y:18}):25>d?(b=To(this,38,\"255,105,0\"),e={x:13,y:23}):50>d?(b=To(this,38,\"240,60,0\"),e={x:13,y:23}):100>d?(b=To(this,38,\"181,0,21\"),e={x:13,y:23}):1E3>d?(b=To(this,48,\"181,0,21\"),e={x:15,y:28}):(b=To(this,66,\"181,0,21\"),e={x:20,y:38}),c=e,e=b.width,f=b.getContext(\"2d\"),f.fillStyle=\"#FFFFFF\",g=11*this.a,f.font=\"bold \"+g+\"px Arial\",g=c.x*this.a,c=c.y*this.a,f.fillText(d,g,c),b=new O(b,{anchor:{x:e/\n2,y:e/2}}),this.c[d]=b);d=new Oh(a.getPosition(),{icon:b,min:a.f(),max:a.m()});d.f(a);return d};So.prototype.getClusterPresentation=So.prototype.f;So.prototype.g=function(a){var b=new Oh(a.getPosition(),{icon:this.j,min:a.f()});b.f(a);return b};So.prototype.getNoisePresentation=So.prototype.g;function Uo(a){No.call(this,a);a=this.g;if(a.projection!==Bg)throw new C(Uo,0,\"Other projection than mercator not supported yet\");this.l=a.projection;this.f=a.eps;this.s=a.minWeight;this.m=new Cg(this.l);(new ch).Id(\"cluster\",\"H.clustering.dynamicgrid.worker\");this.j=z(this.j,this);this.i=z(this.i,this)}v(Uo,No);Uo.prototype.rg=function(a,b){this.o=a;this.u=kb(b)};\nUo.prototype.Te=function(a,b){var c,d,e,f;c=this.c;var g=this.o,h=this.u||0;d=!c||!(c.zoom===h&&c.c.m(g));var k=Po;if(g&&(this.b||d)){c&&3>c.state&&c.cancel();this.b=!1;c=this.f;var l;c>=128<<h?f=Vo:(d=this.m,d.Aa(h),e=d.geoToPixel(g.jb()),f=d.geoToPixel(g.hb()),e.y-=c,f.y+=c,e=d.a(e),l=d.a(f),f=new E(e.lat,e.lng,l.lat,l.lng),c=d.ua(c,0).lng+180,f=f.a(e.lat,e.lng-c,l.lat,e.lng).a(e.lat,l.lng,l.lat,l.lng+c));c=f;e=this.a;f=[];for(d=e.length;d--;)c.Fc(e[d])&&f.push(e[d]);0<f.length?(this.c=new Wo(g,\nh,f,this.f,this.s,this.l!==Bg,a,b),this.c.then(this.j,this.i),k=this.c):a(Qo)}return k};Uo.prototype.j=function(a){pa(a)||(a=new w.Uint32Array(a));this.c.g(Xo(this,a))};Uo.prototype.i=function(a){qa(a)&&this.c.f(a)};var Vo=new E(90,-180,-90,180);\nfunction Xo(a,b){for(var c=0,d=b[c++],e=Array(d),f=0,g=[],h=b.length,k=a.c.a,l=a.c.zoom;d--;)e[f++]=new Mo(k[b[c++]],l);for(;c<h;){var d=b[c++],f=k[b[c]],m=a.m,n=void 0,r=a.f,t=void 0,n=void 0;m.Aa(a.c.zoom);n=m.geoToPixel(f);t=m.ua(n.x-r,n.y-r);n=m.ua(n.x+r,n.y+r);f=new E(t.lat,t.lng,n.lat,n.lng);for(f=new Lo(f.jb(),f.hb(),l);d--;)f.Ac(k[b[c++]]);g.push(f)}return{clusters:g,noisePoints:e}}Uo.prototype.D=function(){Uo.v.D.call(this)};\nfunction Wo(a,b,c,d,e,f,g,h){this.c=a;this.zoom=b;this.a=c;this.g=g;this.f=h;a=c.length;g=3*a;h=new (w.Float32Array||Array)(g);for(var k;a--;)k=c[a],h[--g]=k.lat,h[--g]=k.lng,h[--g]=k.wt;kd.call(this,\"cluster\",{message:[h,d,e,b,f]},void 0)}v(Wo,eh);function Yo(a,b,c){this.b=a;this.a=b;this.g=c}q(\"H.clustering.fastgrid.NoisePoint\",Yo);Yo.prototype.getPosition=function(){this.c||(this.c=this.b.ua(this.a[1],this.a[0],1));return this.c};Yo.prototype.getPosition=Yo.prototype.getPosition;Yo.prototype.tb=function(){return this.a.a};Yo.prototype.getWeight=Yo.prototype.tb;Yo.prototype.i=se;Yo.prototype.isCluster=Yo.prototype.i;Yo.prototype.f=function(){return this.g-this.b.c};Yo.prototype.getMinZoom=Yo.prototype.f;Yo.prototype.getData=function(){return this.a.data};\nYo.prototype.getData=Yo.prototype.getData;function Zo(a,b,c,d){this.g=a;this.b=b;this.B=c;this.C=d;this.u=xa(this.u,this);this.o=xa(this.o,this)}q(\"H.clustering.fastgrid.Cluster\",Zo);Zo.prototype.getPosition=function(){this.c||(this.c=this.g.ua(this.b.Cc,this.b.Dc,this.b.Va));return this.c};Zo.prototype.getPosition=Zo.prototype.getPosition;Zo.prototype.tb=function(){return this.b.Va};Zo.prototype.getWeight=Zo.prototype.tb;Zo.prototype.i=re;Zo.prototype.isCluster=Zo.prototype.i;\nZo.prototype.f=function(){return this.B?this.B-this.g.c:-1/0};Zo.prototype.getMinZoom=Zo.prototype.f;Zo.prototype.m=function(){return this.C-this.g.c};Zo.prototype.getMaxZoom=Zo.prototype.m;Zo.prototype.P=function(){this.a||(this.a=Ne(this.g.ua(this.b.a,this.b.f,1),this.g.ua(this.b.b,this.b.c,1),!0));return this.a};Zo.prototype.getBounds=Zo.prototype.P;Zo.prototype.l=function(a){this.s=a;$o(this.b,this.u)};Zo.prototype.forEachEntry=Zo.prototype.l;\nZo.prototype.u=function(a,b){var c=!1,d,e,f;a.Va>=this.g.l&&a!==this.b&&a.Va!==this.b.Va&&(this.s(new Zo(this.g,a,0,b)),c=!0);if(!c&&(d=a.entries))for(e=d.length,f=0;f<e;f++)this.s(new Yo(this.g,d[f],b));return c};Zo.prototype.j=function(a){this.A=a;$o(this.b,this.o)};Zo.prototype.forEachDataPoint=Zo.prototype.j;Zo.prototype.o=function(a,b){var c,d,e;if(c=a.entries)for(d=c.length,e=0;e<d;e++)this.A(new Yo(this.g,c[e],b));return!1};function ap(a,b,c,d,e,f){this.j=b;a&&(this.g=a,b&1?(c=a[8],e=a[5]):(c=a[7],e=a[8]),b&2?(d=a[9],f=a[6]):(d=a[4],f=a[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2}p=ap.prototype;p.bc=0;function bp(a,b){return a[b]||(++a.bc,a[b]=new ap(a,b))}p.removeChild=function(a){var b=a.j;this[b]===a&&(delete this[b],delete a.g,--this.bc)};function $o(a,b){for(var c=0,d=a;d=d.g;)++c;cp(a,b,Gb,c)}\nfunction cp(a,b,c,d){var e,f;if(!b(a,d)&&c--)for(++d,e=0;4>e;e++)(f=a[e])&&cp(f,b,c,d)}p.Cc=0;p.Dc=0;p.Va=0;function dp(a){this.b=a||10;this.a=null;ep(this)}function ep(a){a.head=a.a=new ap(null,NaN,0,0,4294967296,4294967296)}function fp(a,b){var c,d;for(c=0;4>c;c++)if(d=b[c])fp(a,d),delete b[c];delete b.g;delete b.entries}function gp(a,b){var c=a.head,d,e;if(b){if(d=b,d!==c)for(c=d;d=d.g;)if(d.entries||1<d.bc)c=d}else for(;!c.entries&&2>(e=c.bc);)if(e)c=d;else break;a.head=c}\nfunction hp(a,b,c,d,e,f,g){var h;h=b.entries;var k;f?b.bc?h=hp(a,bp(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g):h?(h=h[0],k=bp(b,h[1]>=b[8]|(h[0]>=b[9])<<1),k.entries=b.entries,k.Cc=b.Cc,k.Dc=b.Dc,k.Va=b.Va,k.a=b.a,k.f=b.f,k.b=b.b,k.c=b.c,delete b.entries,h.node=k,gp(a,k),h=hp(a,bp(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g)):(f=h=new ip(c,d,e,g),(b.entries||(b.entries=[])).push(f),gp(a,b)):(h||gp(a,b),a=h=new ip(c,d,e,g),(b.entries||(b.entries=[])).push(a));b.Cc+=c*e;b.Dc+=d*e;b.Va+=e;b.a===A?(b.a=b.b=c,b.f=b.c=\nd):(c<b.a?b.a=c:c>b.b&&(b.b=c),d<b.f?b.f=d:d>b.c&&(b.c=d));return h}function ip(a,b,c,d){this[0]=b;this[1]=a;this.a=c;this.data=d};function jp(a){No.call(this,a);a=this.g;this.i=a.projection;this.m=a.min;this.f=a.max;this.l=a.minWeight;this.c=7-kb(ob(ib(1,a.eps))/yb);this.j=new dp(ib(this.m,this.f+this.c))}v(jp,No);p=jp.prototype;\np.Tb=function(a){var b=0,c=a.length,d,e=new L(0,0),f=this.i,g=this.j;jp.v.Tb.call(this,a);fp(g,g.a);for(ep(g);b<c;b++){f.gb(d=a[b],e).scale(4294967296).floor();var h=e.x,k=e.y,l=g.a;if(!(h>=l[7]&&k>=l[4]&&h<=l[5]&&k<=l[6]))throw Error(\"Coordinates out of bounds\");hp(g,g.a,h,k,d.wt,g.b,d.data)}this.b=!0};p.Sa=function(a){jp.v.Sa.call(this,a);this.Tb(this.a)};p.Kf=function(a){for(var b=a.length,c=jp.v.Sa;b--;)c.call(this,a[b]);this.Tb(this.a)};p.ne=function(a){jp.v.ne.call(this,a);this.Tb(this.a)};\np.ua=function(a,b,c,d){return this.i.ua(a/c/4294967296,b/c/4294967296,d)};p.Te=function(a){var b;this.b&&(b={clusters:[],noisePoints:[]},kp(this,this.j.a,0,this.f+this.c,-1/0,b,null),this.b=!1,a(b));return Po};function kp(a,b,c,d,e,f,g){var h=b.Va,k;g&&(g.node.Va!==h?(f.clusters.push(new Zo(a,g.node,g.depth,c-1)),g=null):e++);g||(h>=a.l?(g={node:b,depth:c},e=c):lp(a,b,e+1,f));if(b.bc&&d--)for(c++,h=0;4>h;h++)if(k=b[h])kp(a,k,c,d,e,f,g),g=null;g&&f.clusters.push(new Zo(a,g.node,g.depth,a.f+a.c))}\nfunction lp(a,b,c,d){b=b.entries;var e,f;if(b)for(e=b.length,d=d.noisePoints,f=0;f<e;f++)d.push(new Yo(a,b[f],c));else for(f=0;4>f;f++)(e=a[f])&&lp(a,e,c,d)}p.D=function(){jp.v.D.call(this);this.j=null};q(\"H.clustering.DataPoint\",function(a,b,c,d){this.lat=a;this.lng=b;this.wt=c===+c?c:1;this.data=d});function W(a,b){var c=b||{},d={},e=c.min||0,f=ib(e,c.max||22),g={min:e,max:f};this.min=e;this.max=f;W.v.constructor.call(this);this.u=c.pixelRatio||1;this.b=new I(g);this.b.aa(this);this.c=this.b.b;Ca(d,Oo,g,c.clusteringOptions||{});d.minWeight=ib(Oo.minWeight,d.minWeight);switch(d.strategy){case mp.DYNAMICGRID:if(d.projection!==Bg)throw new C(W,1,\"Unsupported projection\");this.a=new Uo(d);break;case mp.GRID:this.a=new Ro(d);break;default:this.a=new jp(d)}this.a.Tb(a);this.f=c.theme||new So(this.u);\nthis.j=z(this.j,this);this.m=z(this.m,this);np(this)}v(W,F);q(\"H.clustering.Provider\",W);W.prototype.D=function(){W.v.D.call(this);this.c.wa();this.b=null;this.a.J();this.f=this.g=this.a=null;w.clearTimeout(this.i)};var mp={FASTGRID:0,GRID:1,DYNAMICGRID:2};W.Strategy=mp;W.prototype.j=function(){this.dispatchEvent(this.l.Dg);this.a.Te(this.m,jc)};function np(a,b,c){a.i&&w.clearTimeout(a.i);b&&a.a.rg(b,c);a.i=w.setTimeout(a.j,150)}\nW.prototype.m=function(a){this.dispatchEvent(this.l.Cg);this.g=a;op(this)};W.prototype.T=function(a){this.a.Tb(a);np(this)};W.prototype.setDataPoints=W.prototype.T;W.prototype.Sa=function(a){this.a.Sa(a);np(this)};W.prototype.addDataPoint=W.prototype.Sa;W.prototype.s=function(a){this.a.Kf(a);np(this)};W.prototype.addDataPoints=W.prototype.s;W.prototype.G=function(a){this.a.ne(a);np(this)};W.prototype.removeDataPoint=W.prototype.G;W.prototype.o=function(){return this.f};W.prototype.getTheme=W.prototype.o;\nW.prototype.$=function(a){this.f=a;this.g&&(this.c.wa(),op(this))};W.prototype.setTheme=W.prototype.$;function op(a){var b=a.g.clusters,c=a.g.noisePoints,d,e=b.length,f=c.length;for(a.c.wa();e--;)d=b[e],a.c.R(a.f.getClusterPresentation(d));for(;f--;)b=c[f],a.c.R(a.f.getNoisePresentation(b));a.dispatchEvent(a.l.fa)}W.prototype.l={fa:\"update\",Dg:\"start\",Cg:\"end\"};W.prototype.C=function(){return!0};W.prototype.providesDomMarkers=W.prototype.C;\nW.prototype.M=function(a,b,c,d){np(this,a,b);return this.b.l(a,b,c,d)};W.prototype.requestDomMarkers=W.prototype.M;W.prototype.F=function(){return!0};W.prototype.providesMarkers=W.prototype.F;W.prototype.L=function(a,b,c,d){np(this,a,b);return this.b.m(a,b,c,d)};W.prototype.requestMarkers=W.prototype.L;W.prototype.I=function(){return!0};W.prototype.providesSpatials=W.prototype.I;W.prototype.O=function(a,b,c,d){np(this,a,b);return this.b.u(a,b,c,d)};W.prototype.requestSpatials=W.prototype.O;\nW.prototype.da=function(a,b,c){return this.b.c(a,b,c)};W.prototype.requestSpatialsByTile=W.prototype.da;W.prototype.B=function(){return this.b.I()};W.prototype.getInvalidations=W.prototype.B;W.prototype.A=function(a,b){this.b.i(a,b)};W.prototype.invalidateObject=W.prototype.A;W.prototype.xa=function(){return null};W.prototype.getCopyrights=W.prototype.xa;q(\"H.clustering.buildInfo\",function(){return Tg(\"mapsjs-clustering\",\"0.13.1\",\"e88864a\")});\n");