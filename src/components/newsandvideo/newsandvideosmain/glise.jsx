import React, { useEffect } from "react";
import { Glide } from "react-glide";

const GlideSlider = ({ children }) => {
    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            autoplay: 5000,
            hoverpause: true,
            perView: 1,
            gap: 20,
            animationDuration: 500,
            breakpoints: {
                768: {
                    perView: 2
                }
            }
        });

        glide.mount();
        return () => {
            glide.destroy();
        };
    }, []);

    return (
        <Glide
            type="carousel"
            options={{
                autoplay: 5000,
                hoverpause: true,
                perView: 1,
                gap: 20,
                animationDuration: 500,
                breakpoints: {
                    768: {
                        perView: 2
                    }
                }
            }}
            className="glide"
        >
            <Glide.Track>
                <Glide.Slide>
                    {children}
                </Glide.Slide>
            </Glide.Track>
        </Glide>
    );
};

export default GlideSlider;
