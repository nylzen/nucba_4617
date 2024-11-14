import { FooterContainer, LinksFooter } from "./footer-styles";

const footerLinks = [
  {
    id: 1,
    title: "Términos de Uso",
    path: "/",
  },
  {
    id: 2,
    title: "Trabajá con Nosotros",
    path: "/",
  },
  {
    id: 3,
    title: "Soporte",
    path: "/",
  },
];

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksFooter>
        {footerLinks.map((link) => (
          <a key={link.id} href={link.path}>
            {link.title}
          </a>
        ))}
      </LinksFooter>
      <p>Hecho con 💖 en NUCBA</p>
    </FooterContainer>
  );
};
