import { SectionHeader } from "@/components/SectionHeader";

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="section bg-navy pt-32">
      <div className="container">
        <SectionHeader title={title} description={description} light />
      </div>
    </section>
  );
}
