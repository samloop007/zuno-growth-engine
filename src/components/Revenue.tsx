import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { getSiteData } from "@/lib/store";

const Revenue = () => {
    const [revenue, setRevenue] = useState(getSiteData().revenue);

    useEffect(() => {
        const handleUpdate = () => {
            setRevenue(getSiteData().revenue);
        };
        window.addEventListener("siteDataUpdated", handleUpdate);
        return () => window.removeEventListener("siteDataUpdated", handleUpdate);
    }, []);

    return (
        <section className="py-20 bg-accent text-accent-foreground overflow-hidden relative">
            {/* Decorative background circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm shadow-xl animate-bounce">
                        <TrendingUp size={48} className="text-white" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-medium opacity-90">
                        Total amount Invested by client
                    </h2>

                    <div className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                        {revenue}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Revenue;
