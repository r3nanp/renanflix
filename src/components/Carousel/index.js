/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react'
import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from './components/Slider'

import { VideoCardGroupContainer, Title, ExtraLink } from './styles'

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo
  const categoryColor = category.cor
  const categoryExtraLink = category.link_extra
  const videos = category.videos
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink
              href={categoryExtraLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default Carousel
