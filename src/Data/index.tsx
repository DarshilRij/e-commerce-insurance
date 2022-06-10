export const InsurancePackages = [
  {
    id: 1,
    name: "Proteco Insurance",
    description:
      "Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
    price: 12.5,
  },
  {
    id: 2,
    name: "Umbrella Insurance",
    description:
      "Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
    price: 35.73,
  },
  {
    id: 3,
    name: "Thor Insurance",
    description:
      "Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
    price: 79.3,
  },
];

export function getInsurancePackage(id: number) {
  return InsurancePackages.find((invoice: any) => invoice.id === id);
}
