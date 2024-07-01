import StyledComponentsRegistry from "@/lib/regitstry";
import GlobalStyle from "@/styles/GlobalStyle";
import Wrapper from "@/styles/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Wrapper>
            <Header />
            {children}
            <Footer />
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
