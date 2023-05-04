import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
import today from './today.json'
import hotsale from './hotsale.json'
import related from './related.json'
import suit from './suit.json'
import intro from './intro.json'
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })
Mock.mock('/mock/today', { code: 200, data: today })
Mock.mock("/mock/hotsale", { code: 200, data: hotsale })
Mock.mock('/mock/related', { code: 200, data: related })
Mock.mock("/mock/suit", { code: 200, data: suit })
Mock.mock("/mock/intro", { code: 200, data: intro })