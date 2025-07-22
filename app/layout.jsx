import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse',
    description: 'Your go-to platform for real estate insights and property management.',
    keywords: 'real estate, property management, insights, rental, listings',
};
const MainLayout = ({ children }) => {
    return (<html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout;