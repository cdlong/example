$(document).ready(function(){return d3.csv("piracy.csv",function(t){var e,n,r,a,i,o,l,s,c,u,h,p,f,m,y,d;for(e=Highcharts.getOptions().colors,n={},r=0,a=t.length;a>r;++r)i=t[r],(n[o=i.Continent]||(n[o]=[])).push(i);l=0;for(s in n){for(c=0,r=0,a=(u=n[s]).length;a>r;++r)i=u[r],c+=parseInt(i["2013 Value"]);n[s].y=c,n[s].name=s,n[s].color=e[l],l++}p=[];for(f in n)m=n[f],p.push((u={},u.color=m.color,u.name=m.name,u.y=m.y,u));h=p,console.log(h),y=[],l=0;for(s in n){for(r=0,a=(u=n[s]).length;a>r;++r)d=u[r],y.push({color:e[l],y:parseInt(d["2013 Value"]),name:d.Country});l++}return $("#pie").highcharts({chart:{type:"pie",marginTop:0},title:{text:"Annual Software Piracy"},subtitle:{text:"Commercial Value in Millions USD"},credits:{enabled:!1},yAxis:{title:{text:"Total percent market share"}},plotOptions:{pie:{shadow:!1,center:["50%","50%"]}},tooltip:{valueSuffix:" USD"},series:[{name:"Total Pirated",data:h,size:"30%",dataLabels:{formatter:function(){return this.y>3?this.point.name:null},color:"white",distance:-5}},{name:"Pirated by Country",data:y,size:"70%",innerSize:"60%",dataLabels:{formatter:function(){return this.y>1?"<b>"+this.point.name+"</b> / $"+this.y:null}}}]})})});