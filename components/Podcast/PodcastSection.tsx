
import Header from './PodcateHeader/Header'
import EpisodeSection from './Episodes/EpisodeSection'
import CTASection from '../Home/CTA/CTASection'

const PodcastSection = () => {
  return (
    <div className="w-full bg-[#141414] overflow-hidden">
        <Header/>
        <EpisodeSection/>
        <CTASection/>
      
    </div>
  )
}

export default PodcastSection
