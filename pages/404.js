// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <head><title>404 page not found ‐ sitecentre&reg;</title><style>body{background:#081421;color:#d3d7de;font-family:"Courier new";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:18px;line-height:1.5em;cursor:default}a{color:#fff}.code-area{position:absolute;width:500px;min-width:500px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.code-area > span{display:block}@media screen and (max-width: 320px){.code-area{font-size:5vw;min-width:auto;width:95%;margin:auto;padding:5px;padding-left:10px;line-height:6.5vw}}</style></head><body data-new-gr-c-s-check-loaded="14.990.0" data-gr-ext-installed=""><div class="code-area"><span style="color:#777;font-style:italic">// 404 page not found.</span><span><span style="color:#d65562">if</span>(<span style="font-style:italic;color:#bdbdbd"><span style="font-style:normal;color:#4ca8ef">!</span>found</span>){</span><span><span style="padding-left:15px;color:#2796ec"><i style="width:10px;display:inline-block"></i>throw</span><span>(<span style="color:#a6a61f">"Page does not exist"</span>);</span><span style="display:block">}</span><span style="color:#777;font-style:italic">// <Link href="/">Go home!</Link></span></span></div></body>
  </>
}
