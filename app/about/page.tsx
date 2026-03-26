import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import lanternsImage from "@/assets/lanterns-bg.jpg";
import chefImage from "@/assets/chef-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative h-[70vh] min-h-[450px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${lanternsImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="heading-hero text-white mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>
              A journey through time and tradition, bringing authentic Chinese flavors to your table since 1985
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-20 px-4 bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="heading-section text-foreground mb-6">Chinese Garden Legacy</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Founded in 1985 by Master Chef Li Wei, Chinese Garden began as a humble family restaurant
                    with a simple mission: to share the authentic flavors of regional Chinese cuisine with
                    our community.
                  </p>
                  <p>
                    Our recipes have been passed down through three generations, each dish carefully crafted
                    using traditional techniques and the finest ingredients sourced directly from China.
                  </p>
                  <p>
                    Today, we continue to honor our heritage while embracing innovation, creating an
                    elegant dining experience that bridges tradition and modernity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                <img
                  src={lanternsImage.src}
                  alt="Restaurant atmosphere"
                  className="w-full h-80 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-parchment-deep">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                <img
                  src={chefImage.src}
                  alt="Master Chef Li Wei"
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="heading-section text-foreground mb-6">Meet Our Master Chef</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <span className="text-foreground font-semibold">Master Chef Li Wei</span> brings over
                    four decades of culinary expertise. Born in Guangzhou, Chef Li trained
                    under legendary masters in the art of Cantonese cuisine.
                  </p>
                  <p>
                    His philosophy centers on the harmony of flavors, the importance of seasonal ingredients,
                    and the belief that every dish should tell a story.
                  </p>
                  <div className="border-l-4 border-primary pl-6 italic">
                    &ldquo;Cooking is an art form that speaks to the soul. When you taste our food,
                    you should feel the love and dedication that goes into every dish.&rdquo;
                    <br />
                    <span className="text-primary font-medium not-italic">— Master Chef Li Wei</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-parchment">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="heading-section text-foreground">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🥢", title: "Authenticity", desc: "Every recipe honors traditional Chinese culinary techniques passed down through generations" },
              { icon: "🌟", title: "Excellence", desc: "We source only the finest ingredients and maintain the highest standards of preparation" },
              { icon: "❤️", title: "Hospitality", desc: "Every guest is treated like family, with warmth and respect that makes dining memorable" },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={(i + 1) * 100}>
                <div className="card-elegant p-8 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'hsl(var(--parchment-deep))' }}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-serif-display">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
