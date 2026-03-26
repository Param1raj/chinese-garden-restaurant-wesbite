import ScrollReveal from "../ScrollReveal";

export interface Dish {
  name: string;
  image: string;
  price: string;
  description: string;
  isSpecial?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

interface MenuItemProps {
  dish: Dish;
  index: number;
  activeCat?: string;
}

export function MenuItem({ dish, index, activeCat }: MenuItemProps) {
  return (
    <ScrollReveal key={`${activeCat}-${dish.name}`} delay={index * 60}>
      <div className="flex items-start gap-4 py-5 border-b border-border/40 group transition-all duration-300 hover:pl-1">
        {/* Dish image */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0 border border-border">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-foreground font-medium text-base font-serif-display">
                {dish.name}
              </span>
              {dish.isSpecial && (
                <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold">
                  Chef&apos;s Pick
                </span>
              )}
              {dish.isSpicy && (
                <span className="text-[10px] text-primary font-medium">🌶</span>
              )}
              {dish.isVegetarian && (
                <span className="text-[10px] text-jade font-medium">🌿</span>
              )}
            </div>
            <span className="text-primary font-semibold font-serif-display text-lg shrink-0">
              {dish.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            {dish.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
