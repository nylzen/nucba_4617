import {
  ImageBoxStyled,
  ImageContainerStyled,
  ImageShadowStyled,
} from './PokemonImage.styles';

const PokemonImage = ({ image, alt }) => {
  return (
    <ImageContainerStyled>
      <ImageBoxStyled>
        <img src={image} alt={alt} />
        <ImageShadowStyled />
      </ImageBoxStyled>
    </ImageContainerStyled>
  );
};

export default PokemonImage;
