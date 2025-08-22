import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../app/globals.css';

export default function LanguageSchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f7f7]">{children}</main>
      <Footer />
    </>
  );
}
