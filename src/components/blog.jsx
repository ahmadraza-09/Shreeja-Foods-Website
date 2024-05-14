import { useState, useEffect } from 'react';
import '../css/blog.css';
import BlogCard from './blogcard';
import RecentPostCard from './recentpostcard';
import BlogRead from './blogread';

const Blog = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogData, setFilteredBlogData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleBlogCardClick = (blogId) => {
    setSelectedBlog(blogId);
  };

  const handleCloseBlogRead = () => {
    setSelectedBlog(null);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterBlogData(query.trim());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      setFilteredBlogData(blogData);
    } else {
      filterBlogData(searchQuery.trim());
    }
    setSelectedBlog(null);
  };

  useEffect(() => {
    setFilteredBlogData(blogData);
  }, []);

  const filterBlogData = (query) => {
    const filteredData = blogData.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogData(filteredData);
    setNoDataFound(filteredData.length === 0);
  };

  const blogData = [
    {
      id: 1,
      imageUrl: "images/blog-img1.jpg",
      title: "Best Saffron Storage Tips to Preserve Flavour",
      paragraph: (
      <>
        <p>
          Saffron is one of the most luxurious spices that can transform the look and taste of a dish. Used in various savory and sweet dishes, this delicate thread-like spice is obtained from the stigma of the Crocus sativus flower.
        </p>
        <p>
          To ensure you get maximum flavor from your saffron, only buy saffron online from premium sources. Procuring high-quality saffron is easy these days as top brands such as DryFruit Basket make it possible to order saffron online.
        </p>
        <br />  
        <p>
          However, as this is a delicate yet expensive spice, proper storage is essential to retain its flavor, aroma, and visual appeal. <br /><br /> Here, we bring you the top tips to correctly store saffron.
        </p>
        <br />
        <p>
          <h4>1. Temperature and Environment</h4><br />
          Saffron’s delicate flavor and aroma can be quickly compromised when exposed to elements such as heat, moisture, sunlight, etc. This premium spice survives best when stored in a cool, dark pantry cupboard, away from direct heat and light. Opt for a cupboard which maintains a consistent temperature throughout the year. Avoid placing saffron in areas near the stove, oven, fridge, or other sources of heat as such fluctuations in temperature can compromise the flavor and freshness of saffron.
        </p>
        <br />
        <p>
          <strong>2. Keep Away from Moisture</strong><br /><br />
          Moisture is one of the biggest enemies of saffron. When you buy saffron online, be sure to check for a sealed container. Moisture in transit can cause the saffron strands to stick together and lose their aroma. Store the saffron in a dry place and avoid storing it in the fridge or freezer for this very reason.
        </p>
        <br />
        <p>
          <strong>3. Pick the Right Container</strong><br /><br />
          Selecting the right storage container is an important step in properly storing saffron. Store saffron in airtight containers to keep these delicate threads away from exposure to air and moisture. Glass and ceramic containers are ideal as they are neutral and do not affect the flavor in any way. Be sure to check that the container is completely dry before placing the saffron.
        </p>
        <br />
        <p>
          <strong>4. Regular Maintenance</strong><br /><br />
          One of the biggest mistakes people make is in their daily usage of saffron. Most people leave the storage container lid loose or leave the container for prolonged periods of time while cooking. This causes heat from the surrounding environment to degrade the flavor and aroma of the saffron. Always seal the container properly and immediately to retain freshness.
        </p>
        <br />
        <p>
          <strong>5. Avoid Plastic Jars</strong><br /><br />
          Plastic containers or bags can lead to unwanted odors and compromise the flavor of the saffron over time, compromising its quality. Avoid plastic bags especially if they are not suitable for food storage or made using non-food-grade materials. Use glass or metal containers instead. Also, when you order saffron online from premium brands such as Dry Fruit Basket, it can last for a couple of years when stored properly giving you the best value for your money.
        </p>
        <br />
        <p>
          <strong>Conclusion</strong><br /><br />
          When it comes to this fragrant spice, proper storage is critical to maintain potency and freshness. By following these guidelines and storing saffron in the right storage containers, you can ensure that your saffron remains fresh for an extended period. To ensure you get the best flavor and aroma in your dishes, order saffron online from Dry Fruit Basket, known for its premium quality and hygienic packaging.
        </p>
      </>
      ),
      date: '13 May, 2024',
      buttonText: "Read More"
    },
    {
      id: 2,
      imageUrl: "images/blog-img2.png",
      title: "Apricot For Your Weight Loss Plans and Added Benefits",
      paragraph: (
      <>
        <p>
          High in fiber and a powerhouse of nutrients; buying apricots online can promote health and happiness. Being loaded with Vitamins like A and C, apricot supports immune function and overall health. Whether enjoyed as snacks, munchies, or mixed into your cereal, the soft fruit is just great to melt away those unwanted pounds. Apricots can be the best addition to your weight loss diet as they promote fullness and do not add to the empty calories. If experts are to be believed, here is why it plays an instrumental role in weight loss, and one should buy dried apricots online.
        </p>
        <br />  
        <p>
          <h4>Fiber Food</h4><br />
          Fiber in apricots increases your satiety levels and makes you binge less. Eating fiber is frequently overlooked but it can support your weight loss goals as it plays a crucial role in your diet. Apricot offers plenty of good dietary fiber and contain half-soluble and half-insoluble fiber. Soluble fibers impact your metabolism, overall health, and weight loss plans.
        </p>
        <br />
        <p>
          <strong>Low-calorie food</strong><br /><br />
          The vibrant and furry orange apricots are a low-calorie food packed with minerals and antioxidants and said to have almost no fat. If apricots are rare to find in your local groceries, buy apricots online, add them to your smoothies, or pair them with your nuts and enjoy the unique nutritional talent of the low-calorie energy source.
        </p>
        <br />
        <p>
          <strong>Improves Digestion</strong><br /><br />
          Apricots keep all digestion problems at bay making them an excellent choice for maintaining a healthy diet and achieving weight loss goals. A well-functioning digestive system means absorbing good nutrients and energy and that’s why the delicious apricots can be a secret weapon for your weight loss journey. Just buy apricots online, rinse a few, and enjoy them plain or mix them with your juice, yogurt, oatmeal, or toast.
        </p>
        <br />
        <p>
          <strong>Faster Metabolism</strong><br /><br />
          Apricots are rich in potassium, magnesium, and iron and these metabolism-enhancing nutrients are an excellent remedy to boost metabolism, keep the body functioning properly, and lose weight. As we all know, being obese or overweight can lead to multiple health problems including cardiovascular diseases; it becomes important to replace your processed or packaged foods with healthy apricots.
        </p>
        <br />
        <p>
          <strong>Natural Sugars For Sustained Energy</strong><br /><br />
          The remarkable nutrient content in apricots makes this fruit a perfect inclusion to a healthy as well as diabetic diet. Furthermore, apricots contain natural sugar that provides a healthier alternative to processed sugar. They don’t disrupt glucose levels, making them suitable for diabetic individuals.
        </p>
      </>
      ),
      date: '13 May, 2024',
      buttonText: "Read More"
    },
    {
      id: 3,
      imageUrl: "images/blog-img3.jpeg",
      title: "Makhana During Pregnancy : Nutritious & healthy",
      paragraph: (
      <>
        <p>
          Pregnancy is one of the most beautiful & important phases in a woman’s life. Not just the body that changes, but the way a woman thinks and feel about herself, her priorities, attitude, lifestyle, well, everything that is about to change. The most common health problems in pregnancy are Insomnia, Diarrhoea, Blood Pressure, Diabetes, Urinary Tract Infections, Healthy fetal developement, Food craving, Weakness, Weight gain, Aching or bleeding gums etc.
          <br />
        </p>
        <br />  
        <p>
          <h4>How Makhana (Fox Nut) helps during Pregnancy?</h4><br />
          Makhana, also known as Phool Makhana, Popped lotus seeds, Popped water lily seeds, Prickly water lily seeds, Foxnut or Gorgon nut, are popularly used for medicinal purposes in Asia. Highly nutritious, it is a new superfood found principally in India.
          <br />
          <br />
          They are high in magnesium, iron, potassium, and calcium that are essential during pregnancy. Low in calories, Water Lily Seeds are a choice of snack for the health-conscious crowd.
          <br />
          <br />
          The high nutrients contained in Makhana are good for pregnant women at high risk of gestational diabetes and hypertension and the high calcium content is very good for fetal development.
        </p>
        <br />
        <p>
          <strong>Makhana Benefits in Pregnancy</strong><br /><br />
        </p>
        <br />
        <p>
          <strong>1. Treats Insomnia</strong><br /><br />
          Pregnancy is a period during which you are likely to suffer from frequent insomnia. This mainly happens due to the changing patterns of your hormones, stress, and changing food habits. Makhana (Fox Nuts) could help you sleep because of their mild sedative properties. The vitamins and antioxidants in the seeds also regulate the functioning of the body, allowing you a regular sleep routine.
        </p>
        <br />
        <p>
          <strong>2. Prevents Diarrhoea</strong><br /><br />
          During the early stages of pregnancy, most women go through weird problems with regard to their excretory system. Diarrhoea is one of them. In case of diarrhoea during pregnancy, Makhana (Popped Lotus seeds) are an excellent natural remedy to diarrhoea. The alkaloids present in the fox nuts alleviate diarrhea. It increases the strength of the digestive system, hence prevent it from falling prey to hormonal and food related changes.
        </p>
        <br />
        <p>
          <strong>3. Controls Blood Pressure</strong><br /><br />
          Makhana (Water lily seeds) has low sodium content while being rich in potassium and magnesium. This helps one keep blood pressure under control, and prevent cardiovascular diseases.
        </p>
        <br />
        <p>
          <strong>4. Diabetes Control</strong><br /><br />
          Sugar levels in the blood could elevate during pregnancy. Makhana (Fox Nut) is very high in fibre but relatively low in fat content. This is good for diabetic patients with digestive problems because the low fat means lower sugar is released. 
        </p>
        <br />
        <p>
          <strong>5. Prevents Urinary Tract Infections</strong><br /><br />
          During pregnancy, woman body’s constitution is rather fragile and needs constant nutrition. This is because the vital hormones are changing form. Apart from that, the vaginal secretion might lead to infections in the urinary tract. Makhana has Vitamin C which increases the acidity in the urine, thus limiting the growth of bladder infections causing bacteria. This can reduce the risk of the same by up to 20%.
        </p>
      </>
      ),
      date: '13 May, 2024',
      buttonText: "Read More"
    },
    {
      id: 4,
      imageUrl: "images/blog-img4.webp",
      title: "Is It Good To Eat Mixed Dry Fruits Daily – Eat Anytime",
      paragraph: (
      <>
        <p>
          In the bustling rhythm of our daily lives, finding snacks that are both convenient and healthy can be a challenge. Enter the world of mixed dry fruits, a solution that's gaining popularity for all the right reasons. Whether it's a mixed dry fruit packet you grabbed from the local store or a specially curated mixed dry fruit box you ordered online, these nutritional powerhouses are more than just a snack; they're a lifestyle choice. But the question arises, is it good to eat mixed dry fruits daily?
          <br />
          <br />
          Let’s dive into the world of mixed dry fruits, understanding their essence, benefits, and how they fit into our daily lives.
        </p>
        <br />  
        <p>
          <h4>What are mixed dry fruits?</h4><br />
          Mixed dry fruits are a delightful combination of various dried fruits and nuts. This blend might include almonds, walnuts, raisins, figs, apricots, and even seeds like pumpkin or sunflower. Each component adds its unique flavour and nutritional profile, creating a snack that’s both tasty and beneficial.
          <br />
          <br />
          In many ways, mixed dry fruits resemble the concept of trail mix, a popular snack in Western countries.
        </p>
        <br />
        <p>
          <strong>What is a dry fruit trail mix?</strong><br /><br />
          The concept of trail mix, often used interchangeably with mixed dry fruits, generally includes a combination of nuts, dried fruits, seeds, and occasionally, sweet additions like chocolate. This mix was initially designed as a portable, energy-boosting snack for hikers and has since become a staple for those seeking a nutritious snack option. Different types of trail mix are available in our market with their unique flavours, brands like Eat Anytime offer a variety of trail mix, Cranberry & Orange Zest Trail, Papaya & Pineapple Trail Mix and Fig & Raisins Trail Mix. Each component adds its unique flavour and nutritional profile, creating a snack that’s both tasty and beneficial.
        </p>
        <br />
        <p>
          <strong>Buying Mixed Dry Fruit Online</strong><br /><br />
          The digital age has made purchasing mixed dry fruits easier than ever. The convenience of buying mixed dry fruits online has added to their popularity. Buying mixed dry fruits online is not just convenient; it offers a plethora of choices. You can easily find a wide variety of options, from basic mixes to gourmet blends, tailored to your health needs and taste preferences.
        </p>
        <br />
        <p>
          <strong>Can We Gift Mixed Dry Fruits Packets?</strong><br /><br />
          Mixed dry fruit packets are not just snacks; they're a symbol of care and health, making them an ideal gift. These packets make for thoughtful and healthy gifts. They are perfect for anyone who appreciates a nutritious and delicious snack.
        </p>
        <br />
        <p>
          <strong>Mixed Dry Fruit Box: The Ultimate Gift</strong><br /><br />
          When it comes to gifting, mixed dry fruit boxes are a class apart. They are not just gifts; they're a gesture of care, health, and well-being. Be it festivals, special occasions, or corporate events, a beautifully wrapped mixed dry fruit box is a gift that everyone appreciates.
        </p>
        <br />
        <p>
          <strong>The Ease of Buying Trail Mix Online</strong><br /><br />
          With the advent of online shopping, buying trail mix has become incredibly convenient. The online marketplace offers an extensive range of trail mixes, from classic to exotic, meeting various dietary preferences and health requirements.
        </p>
        <br />
        <p>
          <strong>Conclusion</strong><br /><br />
          Incorporating mixed dry fruits into our daily diet can offer numerous health benefits. Whether as a personal health choice or a thoughtful gift, these nutrient-rich blends are an excellent way to enjoy a delicious and healthful snack. As with any food, moderation is key, but the advantages of including mixed dry fruits in your diet are plentiful. So why not embrace the goodness of mixed dry fruits and take a step towards a healthier, more balanced lifestyle?
          <br />
          <br />
          <strong> Disclaimer:</strong> Content in this blog is drawn from Wikipedia and Google searches. Accuracy may fluctuate, and updates may not be immediate. For dietary or health changes, consulting a dietitian or healthcare expert is recommended.
        </p>
      </>
      ),
      date: '13 May, 2024',
      buttonText: "Read More"
    },
    {
      id: 5,
      imageUrl: "images/blog-img5.webp",
      title: "Benefits of Almonds, Cashews, and Dry Fruits",
      paragraph: (
        <>
        <p>
          Almonds, Dry Fruits, and Cashews are popular with most people due to their exceptional taste and their being packed with nutrition. These snacks provide a lot of health benefits making them a great choice among individuals.
          <br />
          <br />
          Often referred to as "nature's powerhouses," almonds are a rich source of important nutrients. They are a great source of fiber, plant-based protein, and heart-healthy monounsaturated fats.
          <br />
          <br />

          Vitamin E, an antioxidant that promotes skin health and guards against oxidative stress, is abundant in almonds. Additionally, they include important minerals like magnesium and phosphorus, which are critical for bone health and general well-being.
          <br />
          <br />

          Contrarily, cashews are a nutrient-dense nut renowned for their creamy consistency and mild, slightly sweet flavor. They are an excellent source of monounsaturated fats, which can help lower levels of harmful cholesterol.
          <br />
          <br />

          Additionally, cashews are a good source of important vitamins and minerals like magnesium, which supports healthy muscle and nerve function, and copper, which is important for supporting strong bones.
          <br />
          <br />

          There are many different types of dry fruits, such as raisins, apricots, dates, and prunes. The natural sugars in these dried fruits, which are inherently delicious, offer a ton of energy. They are excellent for digestion and general health since they are rich in dietary fiber, vitamins (such as vitamin K in prunes), and minerals (like iron in raisins). 
          <br />
          <br />

          The high antioxidant content of dried fruits is also well known for assisting in the fight against harmful free radicals and lowering the risk of developing chronic illnesses.
          <br />
          <br />

          Almonds, cashews, and other types of dry fruits are nutritional powerhouses that provide a wide range of health advantages. They can add vital nutrients to your diet, promote heart health, improve digestion, and improve your general well-being.
          <br />
          <br />

          They are calorie-dense meals, therefore it's crucial to eat them in moderation. A few of these delectable snacks can make a tasty and wholesome addition to your regular routine.
        </p>
        <br />  
        <p>
          <h4>1. Almonds</h4><br />
          Almonds make for a heart-healthy snack. Monounsaturated fats found in them have been linked to a lower incidence of heart disease. If these fats are included in a balanced diet, they can aid in lowering LDL (bad) cholesterol levels.
          <br />
          <br />
          Despite having a high-calorie content, almonds can help with weight management. Almonds' blend of fiber, protein, and good fats makes you feel full and pleased and lowers your overall calorie intake.
          <br />
          <br />

          Almonds are an excellent source of calcium, which is necessary for healthy bones and teeth. They also include magnesium, which supports the health of bones by working with calcium.
          <br />
          <br />

          Almonds have a low glycemic index, which means their effect on blood sugar levels is negligible. This makes them an ideal snack for those who have diabetes because they help to keep blood sugar levels stable.
          <br />
          <br />

          Almonds contain the antioxidant vitamin E, which is good for the skin. It helps shield the skin from harm brought on by UV radiation, pollution, and aging. It can lessen the effects of aging and help preserve healthy skin.
        </p>
        <br />
        <p>
          <strong>2. Cashews</strong><br /><br />
          Monounsaturated lipids, which are good for the heart, are found in cashews. By bringing down LDL cholesterol levels, these fats can aid in lowering the risk of heart disease. Cashews also provide magnesium, which helps control blood pressure.
          <br />
          <br />
          Cashews and almonds both include a lot of protein and fiber. Due to their beneficial effects on promoting fullness and appetite control, they are an important component of weight-loss programs.
          <br />
          <br />

          Lutein and zeaxanthin, two antioxidants that are essential for eye health, are found in cashews. They can aid in preventing age-associated macular degeneration and other vision issues from affecting the eyes.
          <br />
          <br />

          Cashews are a good source of copper, a mineral necessary for the synthesis of melanin, the pigment that gives hair and skin their color. Melanin is also responsible for healthy hair and skin. Additionally, copper helps collagen formation, which is necessary for skin suppleness and wound healing.
        </p>
        <br />
        <p>
          <strong>3. Walnuts</strong><br /><br />
          Alpha-linolenic acid (ALA), which makes up a large portion of the omega-3 fatty acids found in walnuts, is particularly important for maintaining brain health. Omega-3 fatty acids are essential for brain function and may lessen the likelihood of cognitive deterioration as people age.
          <br />
          <br />
          The omega-3 fatty acids in walnuts help to maintain a healthy heart by lowering inflammation and elevating cholesterol. They can reduce triglycerides and cut down on the chance of getting heart disease.
          <br />
          <br />

          Walnuts are a good source of polyphenols and other antioxidants that fight inflammation and oxidative damage. This could lower the risk of developing chronic illnesses like cancer.
          <br />
          <br />

          People who suffer from inflammatory diseases like rheumatoid arthritis can benefit from walnuts' anti-inflammatory characteristics. They might assist in discomfort relief and inflammation reduction.
        </p>
        <br />
        <p>
          <strong>4. Dates</strong><br /><br />
          Dates can be used in recipes as a natural sweetener to add sweetness without the use of refined sugars. They are therefore a more healthy choice for sating your sweet desire.
          <br />
          <br />
          Dates are rich in dietary fiber, which supports a healthy digestive system. They promote regular bowel motions and aid in preventing constipation.
          <br />
          <br />

          Dates' natural carbohydrates, like fructose, give you a fast energy boost. This makes them a fantastic option for a pre-workout snack or a pick-me-up in the middle of the day.
          <br />
          <br />

          Dates are rich in nutrients and are nutrient-dense. They are a great source of potassium, which is necessary for maintaining healthy muscular function and controlling blood pressure. They also supply iron, magnesium, and vitamin B6.
          <br />
          <br />

          Dates include calcium and phosphorus, elements that are essential for keeping healthy bones and teeth. Your diet may benefit your overall bone health if you consume dates.
          <br />
          <br />
          <br />

          

          Overall, A variety of health advantages can be obtained from including these dry fruits in your diet in moderation, but it's crucial to pay attention to portion sizes, especially if you're limiting your calorie consumption. 
          <br />
          <br />

          A wider range of nutrients for general health and well-being can also be obtained by eating a variety of nuts and fruits. Always seek the advice of a medical expert or trained dietitian for individualized dietary advice based on your unique health needs and objectives.
        </p>
      </>
      ),
      date: '13 May, 2024',
      buttonText: "Read More"
    }
    
  ];

  return (
    <>
      <div className="blog-section">
        <div className="about-banner contact-banner">
          <img src="images/banner6.jpg" alt="" />
        </div>
        <h2>Blog</h2>
        <div className="blog-main-section">
          <div className={`blog-main-section-left ${showFilter ? 'show' : 'hide'}`}>
            <label htmlFor="filter-check" onClick={handleFilterToggle}><i className="fa-solid fa-xmark"></i></label>
            <input type="checkbox" id='filter-check'/>
            <form className='blog-search' onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder='Search Blogs...' 
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
              <button type='submit'>Search</button>
            </form>
            <h3>Recent Posts</h3>
            <div className="recent-post">
              {blogData.map(blog => (
                <RecentPostCard
                  key={blog.id}
                  imageUrl={blog.imageUrl}
                  title={blog.title}
                  date={blog.date}
                  onClick={() => handleBlogCardClick(blog.id)}
                />
              ))}
            </div>
          </div>
          <div className="blog-main-section-right">
            <div className="blog-main-section-right-header">
              {selectedBlog !== null && (
                <label className="blog-back" onClick={handleCloseBlogRead}>
                  <h4>Back</h4>
                </label>
              )}
              <label className="blog-filter" htmlFor='filter-check' onClick={handleFilterToggle}>
                <h4>Filter</h4>
                <img src="images/filter.png" alt="" />
              </label>
            </div>
            {noDataFound ? (
              <p>Blog Not Available!</p>
            ) : (
              selectedBlog === null ? (
                filteredBlogData.map(blog => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    imageUrl={blog.imageUrl}
                    title={blog.title}
                    paragraph={blog.paragraph}
                    buttonText={blog.buttonText}
                    onClick={() => handleBlogCardClick(blog.id)}
                  />
                ))
                ) : (
                  <BlogRead
                    title={blogData[selectedBlog - 1].title}
                    imageUrl={blogData[selectedBlog - 1].imageUrl}
                    paragraph={blogData[selectedBlog - 1].paragraph}
                    onClose={handleCloseBlogRead}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
