import ImageAurelien from '@/assets/picture/contacts-images/aurelien.png'
import ImageYannick from '@/assets/picture/contacts-images/yannick.png'
import PictureShape from '@/assets/picture/contacts-images/combined-shape.svg'

export type ContactImages = any[]

export default [
  {
    image: ImageAurelien,
    name: 'Aurélien Romain',
    post: 'CONSULTANT',
    email: 'AURELIEN@OB-VIOUS.COM',
    shape: PictureShape

  },
  {
    image: ImageYannick,
    name: 'Yannick Tranchier',
    post: 'CEO',
    email: 'YANNICK@OB-VIOUS.COM',
    shape: PictureShape
  }
]