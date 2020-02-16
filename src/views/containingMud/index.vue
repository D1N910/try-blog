<!-- 衔泥 -->
<template>
  <div
    class="blogPage containingMud">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="containing-mud-container"
    >
      <h1>
        <span class="c6b2ad9">燕子衔泥,</span>
        <span class="cd56569">然后筑巢</span>
      </h1>

      <!-- 现有的表情包 -->

      <ContainingMudItem
        v-for="item in getSaidsBoth"
        :key="item.id"
        :propData="item"/>
      <div
        v-if="!haveFull"
        @click="get()"
        class="nothing add-more">
        加载更多
      </div>

      <div
        v-if="haveFull"
        class="nothing">
        没有更多
      </div>
    </div>

    <!-- 加载 -->
    <Loading
      v-if="loading"
      />

    <!-- 展示图片的画廊 -->
    <Gallery
      @closeGallery="galleryShow = false"
      :galleryImgSrc="galleryImgSrc"
      :galleryShow="galleryShow"/>

      <!-- 像素男 -->
      <div class="pixel-man">
        <!-- 图片 -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABUCAYAAADDJWreAAAFM0lEQVR4nO3dv28bZRzH8c8DoVaKISYhkCBUmCLRORiVAQakSDYMEZWQTpH6B2TIwsTMwM6QjaVS5KoSiAHFUqZkQriZMhQpI0Kyk7SuSUMrN6EPg/O93D2+893z3PPc8/jHW6riXB370Uv34znfNQXcjV/+cTLOOaZsDyIiDgDf/N4BANy/VSJAZmtAcbk0oBCa2P1bJXroxJg5504MZCCamCuItvGk0MRsI9rCy4QmZgsxbzytaGJ5I+aFZxRNLC9E03i5oomZRjSFZxVNzBSibjyn0MR0I+rCcxpNTBdiVryhQhPLiqiKN9RoYqqIsngjhSYmi5gWb6TRxNIiJuGNFZpYEmIc3lijicUhingTtAGJiITHAeCz3Q4WCpZGNkQRIuecTQFApdYAmodoLS4BwAQxpla3t5Kxg10wxnjoGsbrzcPekyaIoVrd3ld2sBtaHnkBaILYKw6NGnj1bFwRk9CoVJcexwUxLRoldd12VBFl0Sili96jgqiKRmW6Y2BYEbOiUVputxgWRF1olNZ7VVxF1I1GGbnRxxVEU2iU0bukbCGaRqNyucUsL8S80Khc788zhZg3GmXl5kZdiLbQKKt3hqoi2kajnLitNi2iK2iUE3hUHKJraJRTeJSI6Boa9YrtASTlKhwwBHguN8HLkPI+r+6VI5dXag3lweiq2z7uW1aYfUf7+yjh1b0yHt72Iv/uple2CthtH+PF2Sn4xXmq52dBlcYbBAcAD297VgBpbet2HgMA/vunjefPzgAA09eL6Cb8vAqik1MV2brt40i0F51H/tdrAcjQzwqvJYOohPfRd1/1Lfvzh99UXipzBBeFdnH6JPHnp+l1ABRKc1LvPRJrHgA8f3YWiXb+NN2NS8WZWen3VJ6qsOW10Fcgeo3MO4I7f9oJwdHji9Mn/h/gai1VSQqv7pXB97cAAHx/C48L7/vfuwCXlAiaZrMeVKZJ8lz3775lN3+uOTHXG1TaTTmpyRlGhjLhseW10D5v3JI62lZqDbDl3mkZ39/y93fA1YHD9U1WZ9JTFcIhROrwTgsAsOQtjA1gpnkegYnLxgVQaZ9X98qRcNThnVbspy6jlNaj7dLdBf+xy4CvvVFKflKKtJ+enbRPMD87r/tltRREm3rzLQDAtdLbKC7eQKE0J/3JitJHUoM2WVcjuCDa9PUiXp2ZVYIDRuiDgbji0ABkggMU8QZtmkcvmzh61FQajM6i0ABogwMMrHmffvvX1Tfbul89fYQG9K9tADLDAYY223dnppOfZKggGgDMvPchAL1o/ntxzhljjAPpT62OXjaBdu9x3ObLltesTpSDBwRAL9rexiqAyzWvUmswAKh75UTESq2Br70yfqnuAIAT+zcquF8zifb5j7+yvY3V8GYrg/jTyR9aBqSzPNCCyyP3eWkQP5j/xH+8ub2CLz/+XstAVSsu3gCQDxo18IAhsyYCwHp1BwtfrCDNc3VGV73yQqNSHW2jEDe9MtYv93sRz5cZa6Z03kaRFo2SmqpwzhkA0NF5VJJFo5TmecHpDRXcBw5LqmjUyJ/bRpUVjRorPF1olBE8+hDUlY/idaNRptY8xjmH7Gmf7kyhUUY3W845q957kHqeqCvTaFQu+zzZybZqeaFRSniXm2Pf76FKyhRi3mhUljWPb273TsXWqztSkLoQbaFRqnghrM3tFR9svbrDCDUpVUTbaBTjnKN674HNMfiJiP8uLoX+BZAraEBvLDSlsD0WMf/X0rGDXafQqL2N1d4v0XM4p/8rm/8BqkOmr2qxbNMAAAAASUVORK5CYII=" alt=""/>
      </div>
  </div>
</template>

<script>
import ContainingMudItem from './_components/containingMudItem.vue'
import Gallery from './_components/gallery.vue'
import { apiGet } from '@/utils'
import Loading from '@/components/loading'

const marked = require('marked')
const hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

export default {

  name: 'containing-mud',

  data () {
    return {
      galleryShow: false,
      galleryImgSrc: '',
      loading: true,
      getSaidsBoth: [],
      getSaidsBothData: {
        offset: 0,
        limit: 8
      },
      emojiList: {
        '热词系列_知识增加': 'data:image/webp;base64,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',
        '2233娘_大笑': 'data:image/webp;base64,UklGRqwOAABXRUJQVlA4WAoAAAAQAAAAbwAAbwAAQUxQSJEGAAABoIVt2xlJ+v4y2jZmbdu2bXu7Z23bHNuzGNu2baPNQldSyf99B1Vh/Xu6V0RMAPwPXmd6+dk3Pnjf8ey/gWVc89aQVY1dSmx8wBxfZR4TCEs//fMl9RJS4uqgGZ6L+28Yc7wwWO79f7eTdkctmFj2dj0S/94lCO9tU1pJpzK40JjrjKkhQqQdp4jh7OEy6cXFpWA4/90jRPGOKMV/CQqAnb5BJd0dDzMjrFu/TiJUOBJtOU0AVXPIYHzGFUF9gYc2qaStfsBSjp2/xQipO78uZjpy3zqMpMmRlvhTDnI+b1IMEEnDirUKB3cgafKISlsyUw/SHx60uwv10YbTNDwfyqSqGionPtqTUg5PWl7Jsaedf/XDH449oOjBYVkavl6cFFkDsXXqBZC6rpJLn/lyxJJdDe3haCTUHtITm3U8aLLL6whVTBaedkeGI7sykBLu/Ft+Xbo/rCKZiPUfHMu0wPVqCxHnRKQefKPSV/H0pCVfltiOZV3zyw6FzMfmUXcUMw3w1YYJFeKNv52WccmP+xTEyJdem3muH3FQJYtbZt0d1ICMYUgYn/9Q9ql/7JCQ5DjfVGYr/01jIkg2lBbclpYMzlhQv/jFvDP61KlEhPvXcvkpZqPSjw5zsmndD+XJfBfdfZz/kaUyUmJ8dYyPDtrGf+WKGNk3vvZ6fwIwh+/xI3GkpHzhXtx2hl3Suh8gex96x5cAcPoKLvNk8uJ6ar6f2YIV/tRJdg//WJTkkl3YFkuCUoxw2zX2qBoWI/vH/ylOKJ6BcotKRMg5b5t7XwBsyApHS5SKyvAyAHA8EeMN+ySOqDROuL3SCXas+lul1ORTygAgfVJcbpW5vKvPhX6wp69vjFKVD8wAYDfu5Kg29788AwCAMesyvohT6so9MgA8D6zc8Mc5bmfmyde98NXAgc/lWeR4vJ5SueNxAPBfcEGG+4SXh6xrlFSuNnX3WsLOOYwpRfvOZAAseP2AvVGVkuLSakuKx1GKq8NzAVwP16lI2o1XWOH7JJJqFHoCwP+FTHqlZ6y4vIFSf1suuGq7dPGfLMgaQwKM1zjYpQ16EMc7THO90CkCWn4MpM9HLURc4TOtfCEKIfowsPdkDeQojfWaxd5SSIzzvXD8xHaudLXvWzHm55rzfGB20RoSpHQsuE99Z9gPtQ9cckyaA8x3vRQVBX3oAOb2uZ0MrC0Yj8KYng62vLKOhLnzbHt8oIgj/Cizg2s6ioN/5LJDUSMJdFjADtfFRLIkywaO9xSRHCiwQaAfiqS11AaVC0mkkWobXHFQKF3HWMdqY2Kpss49CYUSKrXumBYSalORZa4PUCx78i07ZjmJdV2uVcGeimCWZlnkfD5Egp2daYWj+PoenSTaedlWlPRrRRLutlILXN/GSMA7Ci3wTiIRr86xgF00PSagRdkWAGS+vUnVxUWA87IsAfdp7++UdKgogkUWAUDuD4pQaH2eVc7bd5BY9pdb5L37EOrgXASh86xJe3YX6UWOAlAet8J/ev8O1EVCwCE+M4ouqs7MKLnmp+2cDKIIaPMpJhSPPbp7/bodDSqZiAIIv+UxdmMziRzXn2rsjH1CI+WPoCHnmyGhUfjjbCOQ308SGjU+w4xAfm/ZPEQBxHs7DUHZsKhp9WslTMBUQVTbp1/DjLHcmj2yOeEPq19e0MkpEVMgvGL2kJpzsp1gpvOCrzdF0YQZpeAof2liJ6dERER7he7LcoPpzHfMTZ9NXB8y0HAtAwBX3i0D9kQ5ESGpUlcsFmlrqjtaV1df19DU1FB/SDaP5p7IzEtk7pKxmAR5QuQLPyR3n1wz5qCElKi075w9um+Pnr179x01de62CCcLlXEl1gB4Pg6jGmte9OEQmQhnVjMNAFf+Ra9O2ReOc6RERK5yJOvjg0uZNVDy+qCfHzzWCwUjOqSNZ4JRd8F1b/Sfsak+JCmcc0REJSpbROr8q93WgDvoYQDAqrt/cYnDEAA4AsWnXXP/C2988PkPv/f685vXX2pAiwj3fH6syxKdjIGFTNv9skrWY9fGkXcGbGBPdtYasumuSwSRO0bRhVZ0POoQw20Saavt62ZK5vFZpzMxvKwQESrho+uHvXphRVmPmEYkwvXEG2Y9V+4EMR4z7fDeFaO/e+LcPCcAQFaPWLLZNT3mHuiMq4rctvnfjy/zgjCdVeedXp3lYaCZ90VLkgPH+0vOuOrO+++58YLjs50gcueNyyQikm6C/0zHCe/vjfNNp5oHAFZQOCD0BwAAUCMAnQEqcABwAD6ROphHpaMioS0YDPCwEglmANMiGX7d0Q4e0X9Zfzu8wlZ7W51PmAc7zzAea/6b/77vtm874CR/R+3HoWfhMpemDfb4AXr7dqQAfV7iW0nE1nyB6h/SSS3bMjW8wRXd0ScGnRr76i+9SGikzP99U+WuVF6laCtlzqIon2RD7pIlBoomsy5E2OnoJ3NAJAma+K4wDWKjV3/EPIa+5c3705OFSq1VsRvSQSOmXkHqw+2e++2acBgPP718SvMpCCQs9ah+4dDg1A/3YPoop9WnmR/IaFM0NYnmfIdhfKbJjKKaMgJt4TqBx9HNUvIgAlhJJ2zMvR7WOF2OgnFNC7oe1Bbhd/CxjqeD+McF/tR5AVFhoKfqjwDy0HFAAP79L1AAAcWIGNoA+7fH77u76oCsGMVr7hNUdb9dRtp4sXrTfzP4RfyHWrvcFYCbtMNbP0mAu+KNol6+qrO7Hh8Z4+9J80Cubjo6pRTiFNXAWtfMB/Iy9Eo6g2tA7VSpY1kyrAzNd9oBECjNNW2siaUyXBGEt/t+gq1KpRmWif3IhYEILoi2/1yJdUnv9E66+Nx0TLZum5dAFgm32iIzE8JaWsioLn+GWD6XcaW3Y0bT4lPKz7nf3EMVpcpF3r6PZscUgbe7zxiyBInj4OBTKM15fUZZQJWarVQtsnfBeLK/1uEWOCKHfGFfXiQMAZb80FEYzDkMemqQ9RMjzNuKKB7rN7xMnCFxwjjZVA3rMkPqxc1GBDHpz7Hok0l8qfkTgrDVV1BL0VMUb0xJxq8+n3aqehpjaS89epRFkuD2kM199J6GfgpJmIG4DAVqtIB2dR3dSclWD4SrZHFNVXgrQAfoxD2OK9+CpLXgjcIuukXUY3kScfJCuDSMAh9Tb8XM9RmnTdK14AQV2Z5UmmbMryMSZBpy82U9jpJa/mGwpshg99uEQUnf6kcqLGNGk4jA1VQr4Qs+yKeZfygEup+LPdJZI4mJ0JLEeaIV5JmJWScTLMs/dPOIp/JUl2BNrQIX1VxHXGTyNjs3gk/qiwlXEZxsp+HwZyI9yfB3YupnvWj/qp5be/zNQHTjPceWUIDB2E1dvhxkXMumTRK3swmygVgg+ABvABpE3TkEcV83GHkwdMtk7M/cMQ05p+bf7YwrHi+vhFCgau/WYK9ADOjytJTnUyrE6LzegICs3pnw5kjab1k/+uLWfwnit4XbBa9vxZe8lxHHxzpHPQtAbFBObWu8OW3z7xsVLww6lOQafQ42mgV0x+/iHi0dviHuyXbdTEmZdb9GYCFhWeozVpYFmfWlKRaUcqmB8LGIKIvIX95EucIJPRk3vLISy2DKKB0wz93Ep+pnCG0xSCGkDzbn7QxtgxUyVJzkOCiry8vuQftdpfZLQ22Z+9bufcQUraQRSYtzH8edRbk3wT/dwGpBpn9BlqrYkM5QYgWK0RREnGKrRdqERfctwESWSJu57zNexVjHMPIcYuFBmrJyQ5Aw6C7DrRPoVk7NYFpy3xlUeGHJiTURQQrj0oSy5PGzFt7B/gt5VCrSbT0GXrW+TCYgXPDTkXT5KZ/sbnRo7UmMKHpmWZfxTZ7NqZJWVZiUqt5eKS2nG5XBxTo1EMuSu9tLA/Xgw7OObtusfat78kJUf/cVJ6CHsP4ftgEH8ePvwCfaKTh5XVQQa7Zee6Rf8fshYkCVnw8joASaqwoqBkoV3GnJ2eaeXGKIj/hjeedOHty4D29TV4FJldwONbNH8RenzDkn6s1jdO0B1lc6QQnngY39tFxH0kUAWATex+8jtb0yeX6FScsUPiVMr5G2Vv80A+1M//umuE8NgLi07O2mmvpBeprEHKlb1xY8/uOwZnLNbm7LYOAfnijOYEpAxD+SFX/W8nRpJbglpF1HNsk/MTH6go7QVwtjUTB2LP2D+zzWObsic1kMEH32RPDcnQHm3pe7Eoj4WgUOTeRHMGV984T2yONdabaTlrVzhuPIOJugzlZCPMaqWP/mpj4+zDnCpDBNptABaJn6IpBttybCdGRDqrFsvtkadvh35g/F5bff0uLd+yCTe82Cr4L9w6Qg5xLECzXkGRh3puYK1hMt7jHne0LP8ULDJIqg+Sl4/Ebtdq7c5MGqhZK/F2msxSNXw6EHthzJN47oaelVrqm0Ey9J0n7j54FgOVMes/6GY6/zhH7xffXv+35Zq0dvoDvds/pGY5y41WXdrBkT3BtU2TDWB61E60JIZtGYBU9Tb/ZMBaG9rX/HDpwQ7kQ0m9FlXDFY/r0OAnjwABGED1ltzhG/zdyYSmdrbhaKALxYxQb+PdlopVhPfgW7nxXqq7dLfKEJ6EsF231UQ9KNfBCMnk4SWs6FdJTfCX46D1JCr0SBvukUYxP5s3dgmThc8wQQnvsILJzxtI37irmDJiBbou1Jb2Z3C9V6LaMSYZEQK73Mc/uZBcAnxJa/t8smIi/IKSL+gX1DaQ0BWSJ/qBoBWQvHMJHUyM+NWl1Yg2XM830oAiE7j8o5B6HdON2NxJdH2uPBf7hy++Yoj9xpKzbHKVIrRzJLj5vrtSrSxMAzrRr/I9kXjkD2A735T8VtImK+ipEHDOCSzfZBn8kMMu7ZMJA7sR1HNRdf7RoGC+4YYqx0m+jjiac+DAdngy7Yw301GEn0V7dMoY61ARLtHu1ZzetkLdyGmhQ0UpONdkXIxGzk5DdQwLhwUuDN7hFcsP5fAAA='
      },
      smallImgFaceList: {
        'doge': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAC91BMVEUAAADmsQDkrwDElwDTogDWpAHTogHnsgDFlwDdqQDVpAHClQDElgHmsQDWpADWpADoswDosgHksADUowDUowDSoQDfqwHaqQvMnQDdqgDVpAHImgDcqQHImgDClADOnwDcqQDHmQHVpAHgrAHImgDNnwDjrgDJmwLRoQHFlwDGmAPlsAHNngDDlgDClQDlsAHcqQD/////7br/64z/6qz/9dZgKQFeJwD95IL/9NL/56P/997/67D/56z/7ZD/6Yn/5Xz/2WP/9dr/8sz/7sD/7LT+6qj/5ZD/54H/32//8MH/5Zb/6IX/3Wr//PD/8MX/77v/7rfp1rT/5p7/5pn/4Yb12ob74X7/4XT83G/y0W7//fb779P/8MT/9b//6aX/4Y3/5In/4X//33f/2W3isyhtOhj/+ur/+eX46crs3cH/8KH/2pP74I/954b/3oH/3nz/23bx0GfuymXOohtpLwX79+/479zs5Nz/+M3/8cn/8cfi1cb87K/mzq3SvqzYwqL/6Z3/8pz45Jv52n//43j013awjGj+2Wftxl//1F2Yc1bnt1XpxFPtwUK/ij/asj7/0TmCUzB0QyDerxzntBXClg9vNAhiLQdlKwH39fL37NP/88//9cb97cbz5Mb88Lj/7rHMua7/8ajRuqL/6aHkyJ//65OukHz53Xr523f4123yx2Hmv1q0hFn5z1eie1fXrVLjr0fju0WNY0F3PhLClQP59/Xz69no3tTy5s7/9LX53qL/4KHfxZv/7Zf225bSto/GqYvQsYr204Lz2IDxzIDTsYDuzXi4mHbx1HXqy2viu2Dtx1TqvFTXq0zktEvnwEqufUbdtkTkuDzpvDmcYzXitjOTYjJ5SivquinUqCF+SCDxvhqDShe+kgz07ubdzr/dzb7x27HayK754avJtKT235H/14zHm23mvmz31mfeumKeck+Ua0//1U2vgUykb0P80ULgqD/swDqxejiJWjbdoTXYrzSAUSuNXCXouCJ/Rhf5JdAIAAAAMXRSTlMA4PfuHAsFejQj6dl4/v320raxp2ZPSP767tDQwL+ylJKDOy368c7HxKakmH5qYk8V1G2LrwAABBJJREFUOMtllHVYGmEcxwHd3Kbr7u68GxxHOIUBCiiloDAGxpzNEMTO2TNnu067p667u7u7u+OPvYfznkf3+e+e53Pf7/t73/eOYGZiP6IVoSvdrPr17teTgNNfITHM7N7ZmUtUxUYeHYA/dycFvvc0DOhGmGDVn0jqTSL2txoyIDtpo8N8HRGXevosX7nS20gk5qQmbVgbuXZD0qkvv6uqmz9n2JM6S3eLVBsiNbs3BwZu3q2JXMtr/t6cZXQvnNchWRYu/3TXEKtZvgAnUHMgKytD5Vw4EZ9jKFqUqqmY34n9GoUqdYXPELyvb5Ei0E6HurnZ2encUJ1dO5uTUm/5DMLXRFLMR4FSpXJzqq5CUUedoxPG/ufGolkdOzDllBPqhsZSKIoax2SGL0OQiDqaqTjae+A/ycroZG+fSPHzFUXV2HMWAUSUCnsz8uzh/2YjodUn9iU8iQkX+SlTfBeFRTyMj99y/IzKOyUlxbCtfeXjMpRvtkREVN7Jj6G4u4vCYp5FQNDOzNY/Te6A66PM8w9PzzgMQe9KNiEFwXw+vDMegqAHJZU3y+4p+Xz+2aGWQBp83fn8Kmh7WQlCRdL5zs5Nq4C0yYRQqSZnQMPtQVjbVdb5GAgqMFEzEfDmkqZ4TCqjtphalSxAH2y+UTmsc7mPoEoEof7Se+m9jbmHQHAByE2LYspZrMIRQOoV7NVwIffSpTvIjRMKBw958oXcrx/q3y4tbVwfzeG6snx6YUdiKyAn19adeXXs2AEmmefiUXsuqzwuThbgv3AxTHaR3+qDSXTJ4oU0yjqXPU8X0mhRsPZI7Z7VbAabskbM4WqFy3L6mOukAiAxaOWZN/Mzt7A59CP+aj8GhWYO8gy5gtVNUzE5UWsobHbLUgw1BVb7Mxhs4HC4dOGyJT7Ywsdu48FYn/pnKRUpzfdn7/D1wxwxR0p28QhZEToQ28zbdK4gOlz2uJEKSFsfLtuBdYkFMBMLaigehB3L5GAyLJatLj9+A0GuHV4vC5ft8l8TLYC5tiCIdXWYJcHcR2cK1skC9r2sv1YftzogQR2QIOYABwtaETq6/aoMCyZLF687GXfw473WbycPqhMaDwGHTHeVh6Tn3B9MMDM+z4UJi3el5ZeYyqilBS1pATSYCRwPPQia2nF9R9ZpuRIxw1cUFrZIJPJjR7c7y0LSr0zqgX8IFqfJUokA3hsU9CIoKGgv6Nrq6iDXL7l434aA0wOzYKatGbotkwccTy/v7OIZuGK26ngbpbBEIpFujOVpE4WYc7F4euc/jeXoPIWWxyPztFsTXR0cPFF9zY+28YSuzLa4nCwUCoEg9/LyVl4utp5A+J9uNtahedkGpfL12bzQtpFz8Kou9LAZY23RZmE9xgabHOcv/QCN68vE5G4AAAAASUVORK5CYII='
      },
      haveFull: false,
      lock: false
    }
  },

  components: {
    ContainingMudItem,
    Loading,
    Gallery
    // Tips
  },

  methods: {
    gallery (e) {
      this.galleryImgSrc = e
      this.galleryShow = true
    },

    get () {
      const {
        emojiList,
        smallImgFaceList,
        lock,
        haveFull
      } = this

      if (lock) {
        return false
      }
      this.lock = true

      if (haveFull) {
        return false
      }

      // 获取全部说说内容
      apiGet('getSaidsBoth', this.getSaidsBothData).then(res => {
        if (res.statusCode === 200) {
          const oldLength = parseInt(this.getSaidsBoth.length)
          res.content.forEach(element => {
            element.content = marked(element.content || '', {
              sanitize: true
            })
            const reg = new RegExp('<img', 'g')
            element.content = element.content.replace(reg, '<img onclick="gallery(this.src)"')

            // 换行
            element.content = element.content.replace(/\n/gm, '<br/>')

            // 替换表情
            var matchingBrackets = /\[(.+?)\]/g
            let matchingBracketsResult = ''
            let matchEmojiWords = []
            while ((matchingBracketsResult = matchingBrackets.exec(element.content)) != null) {
              matchEmojiWords.push(matchingBracketsResult[1])
            }
            for (let i of matchEmojiWords) {
              const emojiListItem = emojiList[i]
              const smallImgFaceItem = smallImgFaceList[i]
              if (emojiListItem) {
                element.content = element.content.replace(`[${i}]`, `<img src="${emojiListItem}" alt="[${i}]" class="emoji"/>`)
              } else if (smallImgFaceItem) {
                element.content = element.content.replace(`[${i}]`, `<img src="${smallImgFaceItem}" alt="[${i}]" class="emoji small_img_face"/>`)
              }
            }

            const thisData = element.createdAt
            const d = new Date(thisData)
            element.createdAt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            element.show = false
          })
          this.getSaidsBoth.push(...res.content)
          for (let i in res.content) {
            i = parseInt(i)
            setTimeout(() => {
              this.getSaidsBoth[parseInt(oldLength + i)].show = true
              this.$set(this.getSaidsBoth, parseInt(oldLength + i), this.getSaidsBoth[parseInt(oldLength + i)])
            }, i * 60)
          }
          this.getSaidsBothData.offset += this.getSaidsBothData.limit
          if (res.content.length < this.getSaidsBothData.limit) {
            this.haveFull = true
          }
        }
      }).then(() => {
        this.loading = false
        this.lock = false
      })
    }
  },

  mounted () {
    this.get()
    window.gallery = this.gallery
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .containing-mud-container {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;

    h1 {
      padding: 16px;
      font-size: 28px;
    }
  }
  .pixel-man {
    position: fixed;
    right: 10px;
    bottom: 90px;
    img {
      width: 120px;
    }
  }
</style>
