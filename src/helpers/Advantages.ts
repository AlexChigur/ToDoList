import PictureCost from '@/assets/picture/cost-reduction.svg'
import PictureRisk from '@/assets/picture/risks.svg'
import PictureDevelopment from '@/assets/picture/development.svg'
import PictureInnovation from '@/assets/picture/innovation.svg'

export type AdvantageType = {
  logo: any
  title: string
  content: string
}

export default [
  {
    logo: PictureCost,
    title: 'Réduction des coûts',
    content: 'en partageant les coûts de développement'
  },
  {
    logo: PictureRisk,
    title: 'Partage des risques',
    content: 'financiers et techniques'
  },
  {
    logo: PictureDevelopment,
    title: 'Développement accéléré',
    content: 'en accédant à des ressources additionnelles des expertises complémentaires et de nouveaux marchés potentiels'
  },
  {
    logo: PictureInnovation,
    title: 'Financement dédié',
    content: 'À travers les programmes bilatéraux BPI France'
  }
]