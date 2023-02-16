import { getProducts } from '../../database/products';
import ItemsInCart from '../ItemsInCart';
import Checkout from './Checkout';
import CheckoutForm from './Form';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout Page',
};

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {
  const products = await getProducts();

  /* const products = [
    {
      name: 'Slicer',
      image: 'Slicer-1.jpeg',
      title: 'Global G',
      header: 'G-1 Slicer',
      sub: '21cm Blade',
      description:
        "Global's large handle slicer knives come in two sizes, the G-1 at 21cm and the G-6 at 18cm, there is also a small handle equivalent, the GS-2. It is listed as a slicing knife, or slicer knife because of its rounded blunt end. It is very similar to the G-2 in that sense, but is designed for cutting meat into pieces, the idea behind the blunt end is that the tip does not nick or catch as you are slicing through meat and you can smoothly roll it into the cut. These slicing blades work particular well on meat that is close to the bone, such as chicken or duck. Nevertheless the size and shape of the knife lend it to being another all-rounder and this Global knife can be used as a multipurpose knife for cutting up vegetables.",
      price: 176.99,
    },
    {
      name: 'Classic',
      image: 'Classic-2.jpeg',
      title: 'Global G',
      header: "G-2 Cook's Knife ",
      sub: '20cm Blade',
      description:
        'A fantastic multi-purpose all round blade that is included in virtually every knife set Global produce. Winner of multiple awards, including Which Best Knife and the Housewares ICON award, the G-2 has cemented its place into the kitchenware hall of fame.',
      price: 174.99,
    },
    {
      name: 'Oriental',
      image: 'Oriental-3.jpeg',
      title: 'Global G',
      header: "G-4 Oriental Chef's Knife ",
      sub: '18cm Blade',
      description:
        "As a chef's knife the G-4 is suitable for most kitchen tasks, slicing, dicing and chopping. There is very little difference in performance between the G-4 and the classic chef knife, the G-2. The difference is cosmetic, i.e. the kink in the blade. This gives the knife an 'oriental' styling, but it bears no meaning to the function of the knife. It is not designed specifically for oriental food, or oriental ways of using a knife, it is just a different shape of cook's knife. It does have a nice upward curve to the blade, which when cutting with the knife allows it to rock up and down on the chopping board, a bit like a mezzaluna.",
      price: 174.99,
    },
    {
      name: 'Ham',
      image: 'Ham-4.jpeg',
      title: 'Global G',
      header: 'G-10 Ham/Salmon Slicer ',
      sub: '31cm Blade',
      description:
        'The G-10 is a specialist salmon slicer. It has a really long and thin flexible blade that makes it suitable for this purpose only. These knives are typically used for cutting pieces of smoked salmon or trout, the blades are ideal for slicing long thin pieces, which is how smoked salmon is traditionally presented. The handle is the same as other G series knives and is comfortable to hold. There is a gap of about a inch from the handle where the blade is not sharpened to provide a bit of protection. This is the longest knife blade that Global produce and as such does not fit in any of the blocks and also may not slot in a drawer. Ideally it needs to be put on a magnetic rack.',
      price: 184.99,
    },
    {
      name: 'Bread',
      image: 'Bread-5.jpeg',
      title: 'Global G',
      header: 'G-23 Bread Knife Scalloped ',
      sub: '24cm Blade',
      description:
        "The G-22 and G-23 are rather large bread knives with a 20cm and 24cm blade respectively. These knives are alternatives to the classically shaped bread knife the G-9. These blades are much deeper than the G-9 and are basically serrated versions of the G-2 and G-16 cook's knives and so whilst they are labelled as bread knives, they could equally double up as serrated chef's knife. The deeper serrated blade will make it better at cutting through larger than usual loaves of bread such as big sourdoughs or tough bread such as rye or black bread which are typically baked to be quite deep. However due to the size and profile of the knife with its tapered point, it would make a great knife for cutting up any large fruits or vegetables with tough husks, such as pumpkin, coconut and pineapple. A good knife to have for tougher jobs in the kitchen.",
      price: 299.99,
    },
    {
      name: 'Sashimi',
      image: 'Sashimi-6.jpeg',
      title: 'Global G',
      header: 'G-15 Tako Sashimi Knife ',
      sub: '24cm Blade',
      description:
        'Like the Yanagi Sashimi knife the Tako sashimi knife is a specialist Japanese blade for slicing fish. It is discernible from the regular Yanagi Knife by the flat end to the blade. Specifically the Tako part stands for octopus in English. The knife is generally used in the Tokyo area of Japan as a octopus slicer, but the knife can be used to fillet and medium sized fish. Like other traditional Japanese knife blades, this knife has a bevel on only one side of the blade, to help achieve even slices.',
      price: 329.99,
    },
    {
      name: 'Chopper',
      image: 'Chopper-7.jpeg',
      title: 'Global G',
      header: 'G-50 Chinese Chopper ',
      sub: '20cm, 4.0mm',
      description:
        "The G-49 17.5cm and the G-50 20cm are both Chinese chef's knives, whilst they look like cleavers, they are not suitable for this task. These rectangular knives, referred to in Chinese as Caidao are multipurpose knives. Chinese people and chef's will use these knives in the same way that Western chef's will use Western style chef's knives, such as the G-2. These knives will be typically used to prepare all kinds of meat and fish. In fact it is typically the ONLY knife that a Chinese chef will use. Whilst the Chinese chef's knife resembles a cleaver, it does in fact have a sharp thin blade like a standard G series knife. The G-49 is a typical Chinese Caidao with a 2.2mm thick blade and if used as a cleaver, the blade will usually get damaged. Different parts of the blade are used for different tasks with the front of the blade used for a tapping cutting stroke, the middle and back of the knife for heavier chopping work. Whilst it may seem awkward those skilled with a Chinese blade can use them for any kitchen task.",
      price: 374.99,
    },
    {
      name: 'Vegetable',
      image: 'Vegetable-8.jpeg',
      title: 'Global G',
      header: 'G-5 Vegetable Chopper ',
      sub: '18cm Blade',
      description:
        'The G-5 has been a long time favourite of our customers and one of the best selling blades in the original Global series. When Global knives first came to the UK, the shape of the blade was quite strange. A long rectangular shaped, flat blade with only a slight knife point. The G-5 Vegetable Chopper 18cm Blade is inspired by traditional Japanese Usaba knives, popular amongst professional chefs in the Tokyo area and a specialist vegetable knife. The idea behind the shape of the blade is that it encourages a straight up down chopping motion where the full blade length will come in contact with the chopping board and so go straight through the whole vegetable. There is no need to push and pull the knife horizontally through the chopping motion.',
      price: 174.99,
    },
    {
      name: 'Cooksai',
      image: 'Cooksai-1.jpeg',
      title: 'Global SAI',
      header: "SAI-01 Cook's Knife ",
      sub: '19cm Blade',
      description:
        "The SAI-01 is the leading knife in the Global SAI range. As the 19cm chef's knife it can perform any kitchen task and is the perfect all round knife including mincing, dicing, chopping and slicing. The handle design incorporates an ergonomic thumb rest which helps set the right grip for the best cutting technique. The 19cm chef's knife is a good size and is equivalent in the SAI range to the best selling knife in the classic range the G-2. Enjoy slicing through veg like butter with this massively over spec'd knife. The cook's knife comes in two further sizes. The SAI-06, a 25cm chef's knife will be more suited towards professional chefs, the SAI-M01 at 14cm is the smaller version of the chef's knife.",
      price: 248.99,
    },
    {
      name: 'Santokusai',
      image: 'Santokusai-2.jpeg',
      title: 'Global SAI',
      header: 'SAI-03 Santoku Knife ',
      sub: '19cm Blade',
      description:
        'The Global SAI Santoku knife is a really big powerful knife suited for the 3 ways of Sanoku, slicing, dicing and mincing. The SAI-03 is one of the heavist Santoku knives in the Global range. It is really good for chopping vegetables as it has quite a flat profile, but can be used as well for slicing meat. As the knife is so heavy it is a lot stronger than standard Global knives and will take a lot of punishment. A smaller version of the Santoku knife is available as the SAI-M03, at 13.5cm is brilliant for smaller veg.',
      price: 249.99,
    },
    {
      name: 'Vegetablesai',
      image: 'Vegetablesai-3.jpeg',
      title: 'Global SAI',
      header: 'SAI-04 Vegetable Knife ',
      sub: '19cm Blade',
      description:
        'Global SAI has two vegetable knvies in its range. The SAI-04 is a specialist vegetable chopping knife. It has a long flat blade designed to get a clean cut when the knife cuts down onto the board. It is quite a heavy knife and suitable for long hours in the kitchen. With its long 19cm blade and the stretched handle of the SAI series, the SAI-04 knife is the largest vegetable chopper Global produce. It has a smaller brother the SAI-M06, which home users will find a bit more manageable as it has only a 15cm length. This makes it more similar to the popular G-5',
      price: 249.49,
    },
    {
      name: 'Breadsai',
      image: 'Breadsai-4.jpeg',
      title: 'Global SAI',
      header: 'SAI-05 Bread Knife ',
      sub: '23cm Blade',
      description:
        "Global SAI's bread knives are designed to cut through the crustiest loaves of bread, This bread knife is quite long and does not fit in the medium and small size Global blocks. If you are looking to add a bread knife to a block set, try the SAI-M04 which has only a 17cm blade.",
      price: 259.99,
    },
    {
      name: 'Paringsai',
      image: 'Paringsai-5.jpeg',
      title: 'Global SAI',
      header: 'SAI-F01 Paring Knife ',
      sub: '9cm Blade',
      description:
        'The SAI-F01 is a fully forged small blade similar to the GSF series in the classic Global line. This makes the knife small but strong and good for all those little kitchen task, such as peeling, taking the eyes out of potatoes, or just cutting up little bits of fruit. Being a fully forged blade the handle is quite flat as the similar SAI-S01 has a hollow handle. The fully forged SAI-F01 is more durable in that sense but not as comfortable to hold in the hand.',
      price: 119.49,
    },
    {
      name: 'Peelingsai',
      image: 'Peelingsai-6.jpeg',
      title: 'Global SAI',
      header: 'SAI-F03 Peeling Knife ',
      sub: '6.5cm Blade',
      description:
        'The SAI-F03 is a specialist peeling knife and will make quick work of potatoes, apples and carrots. It has a small curved blade which is unsuited to any other kitchen task such as chopping or slicing.',
      price: 119.49,
    },
    {
      name: 'Steelbig',
      image: 'Steelbig-1.jpeg',
      title: 'Global Accessories',
      header: 'G-45 Ceramic Sharpening Steel',
      sub: '24cm',
      description:
        'The high-quality G-45 ceramic grinding rod has a length of 24 cm. The rod can be replaced when worn or broken. A ceramic rod has the advantage that it is not too coarse and thus gives knives a fine sharpness. GLOBAL ceramic sharpening rods are made exclusively by Kyocera and are particularly hard. They are suitable for all types of high-quality knives. However, conventional metal strokes should not be used, as they are clearly too coarse for GLOBAL knives.',
      price: 219.99,
    },
    {
      name: 'Steelsmall',
      image: 'Steelsmall-2.jpeg',
      title: 'Global Accessories',
      header: 'G-74 Ceramic Sharpening Steel',
      sub: '22cm',
      description:
        'The high-quality G-74 ceramic sharpening rod has a length of 22 cm. A ceramic rod has the advantage that it is not too coarse and thus gives knives a fine sharpness. GLOBAL ceramic sharpening rods are made exclusively by Kyocera and are particularly hard. They are suitable for all types of high-quality knives. However, conventional metal strokes should not be used, as they are clearly too coarse for GLOBAL knives.',
      price: 169.99,
    },
    {
      name: 'Diamondbig',
      image: 'Diamondbig-3.jpeg',
      title: 'Global Accessories',
      header: 'G-39 Diamond Sharpening Steel',
      sub: '30cm',
      description:
        'The high-quality G-39 diamond grinding rod has a length of 30 cm. The rod can be replaced when worn or broken. A diamond sharpening rod is excellent for giving knives a fine sharpness. It is suitable for all types of high quality knives. However, conventional metal strimmers should not be used, as they are clearly too coarse for GLOBAL knives.',
      price: 249.49,
    },
    {
      name: 'Diamondsmall',
      image: 'Diamondsmall-4.jpeg',
      title: 'Global Accessoires',
      header: 'G-38 Diamond Sharpening Steel',
      sub: '26cm',
      description:
        'The high-quality Global G-38 diamond sharpening rod has a length of 26 cm. A diamond sharpening rod is excellent for giving knives a fine sharpness. It is suitable for all types of high quality knives. However, conventional metal strimmers should not be used, as they are clearly too coarse for GLOBAL knives.',
      price: 259.99,
    },
  ]; */

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftBox}>
          <h1>Checkout</h1>
          <CheckoutForm />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightBox}>
          <Checkout products={products} />
          <p>
            Items in your Cart: <ItemsInCart />
          </p>
        </div>
      </div>
    </div>
  );
}
