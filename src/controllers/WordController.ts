import {Controller, Param, Get} from "routing-controllers";
const fanyi = require('translation.js')
const Segment = require('segment');
const segment = new Segment();
let usingTimes: number = 0
segment.useDefault();
@Controller()
export class WordController {
    @Get("/words/:translate/:text")
    async getOne(@Param("text") text: string, @Param("translate") translate: string) {
        const fenci = segment.doSegment(text, {
            simple: true
        });
        const start = new Date().getTime()
        const res = await Promise.all(fenci.map(async (word: string) => {
            console.log(translate, text)
            const lang = await fanyi[translate].detect(word)
            if (lang === 'zh-CN') {
                const {result} = await fanyi[translate].translate({
                    text: word,
                    from: lang,
                    to: 'en'
                })
                return result ? result[0]: ''
            } else {
                return word
            }
        }))
        usingTimes++
        console.log(`总共调用次数: ${usingTimes}, 本次调用时间${new Date().getTime() - start} ms`)
        return {
            cn: fenci,
            en: res
        };
    }
}
