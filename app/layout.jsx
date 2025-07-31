import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Property Pulse',
    description: 'Your go-to platform for real estate insights and property management.',
    keywords: 'real estate, property management, insights, rental, listings',
};
const MainLayout = ({ children }) => {
    return (<html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html> );
}
 
export default MainLayout;