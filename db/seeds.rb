#users 
puts "📃 Seeding data..."
u1 = User.create(username: "Munene", password_digest: "cowsandgoats", profile_image: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg") 
u2 = User.create(username: "Sally", password_digest: "sally123", profile_image:"https://cdn-icons-png.flaticon.com/512/194/194938.png") 
u3 = User.create(username: "Titus", password_digest: "ouko", profile_image: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg") 
u4 = User.create(username: "Ivy", password_digest: "kevo", profile_image: "https://cdn-icons-png.flaticon.com/512/194/194938.png") 
u5 = User.create(username: "Mukami", password_digest: "linda", profile_image: "https://cdn-icons-png.flaticon.com/512/194/194938.png")


#articles 
a1 = Article.create({
    user_id: u1.id,
    title: "Habits that damage your mental health.",
    topic: "Mental health",
    story: "If you clicked on this article, I am quite certain that you struggle from time to time with your mental health. Don’t worry, you’re not alone. I struggle too.We are living in a time where we are constantly measured on what we achieve. This results in doubts that we are good enough, or ever will be good enough.We are more disconnected from our fellow humans than ever before, leaving us lonelier than ever before.We are constantly seeing the best moments of others’ lives on social media, making us wonder why our own lives aren’t as good as our friends.I struggle with all these three things. I am lonely, and from time to time I don’t feel seen by the people closest to me.",
    time: 3
})
a2 = Article.create({ 
    user_id: u1.id,
    title: "What makes you smart",
    topic: "Self awareness",
    story: "Smartness is not limited to intellect. Contrary to popular opinion, smartness is not about brains and IQ. It’s also not about good looks or confidence. There’s more to a smart person than meets the eye. It’s an irony that many smart people are oblivious of their smartness. They second guess themselves at the drop of a hat. On the other hand, you also come across not-so-smart people who can’t stop bragging about themselves. Charles Bukowski echoed a similar thought when he said, “The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.”",
    time: 2
})
a3 = Article.create({
    user_id: u1.id,
    title: "Data security",
    topic: "Technology", 
    story: "“A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila.”— Mitch Ratcliffe.Soon every mistake you’ve ever made online will not only be available to your internet service provider (ISP) — it will be available to any corporation or foreign government who wants to see those mistakes. According to a study by the Pew Research Center, 91% of adults agree or strongly agree that “consumers have lost control of how personal information is collected and used by companies.”",
    time: 5
})
a4 = Article.create({
    user_id: u2.id,
    title: "Javascript youtube tutorials",
    topic: "Programming", 
    story: "My JavaScript Basics course is now live on freeCodeCamp’s YouTube channel.The great thing about this course is that it also aligns with the Basic JavaScript Challenges on the freeCodeCamp curriculum. You can practice what you're learning through the videos using the freeCodeCamp challenges.These videos are designed to quickly give you key information on each topic. Also, I designed them to be as modular as possible. They work fine as stand-alone videos, if you just want to learn about a single topic.Besides the JavaScript Basics course, I’ve also developed playlists for ES6, Clean Code, Data Structures, Design Patterns, and jQuery.", 
    time: 6
})
a5 = Article.create({
    user_id: u2.id, 
    title: "Fears and emotional blocks", 
    topic: "Self awareness", 
    story: "You live in a box you’ve carefully constructed to protect yourself. So have I. We all have.Literally, you have designed every detail of your life to protect yourself from the fears and internal conflicts you aren’t willing to face.In his book, The Untethered Soul, Michael Singer gives the analogy of a person with a thorn in their arm. This thorn happens to be pierced right on a nerve. Consequently, with the slightest brush of the thorn, an electrifying pain shoots throughout his entire body.In order for this person to live without pain, he has to make sure nothing touches the thorn in his arm. He can’t sleep on his bed — if he rolls over he’ll touch the thorn. So he creates a device to sleep in to protect the thorn. Problem solved.",
    time: 4
})
a6 = Article.create({
    user_id: u3.id,
    title: "Designing UX/UI",
    topic: "UI/UX",
    story: "Skyrocketing university tuition and pricy unaccredited boot camps aren’t helping to bring socioeconomic diversity to the field of UX. That’s why I’ve compiled a list of completely free learning resources from top companies and universities such as University of Michigan, Georgia Institute of Technology, Facebook, University of California San Diego, Google, M.I.T, University of Minnesota and more.The field of user experience has gained significant popularity in recent years. While companies like FreeCodeCamp and 42 are offering free options for people to learn how to code, learning UX doesn’t seem to have the same support network for self-motivated and driven individuals.",
    time: 5
})
a7 = Article.create({
    user_id: u3.id,
    title: "It's east to write bullshit",
    topic: "Writing", 
    story: "If you can’t explain it to a six-year-old, you don’t understand it yourself
    - Einstein.It’s actually unclear if Einstein said this, or if the original used “six-year-old” or “bartender,” or “your grand mother.” You get all these versions if you google long enough, but the gist is one that I think is true; you’ll learn more about the thing you’re trying to explain when you make an effort saying it the simplest way possible.Never use a long word when a short one will do.Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent.",
    time: 3
})
a8 = Article.create({
    user_id: u4.id,
    title: "Free software development tutorials",
    topic: "Technology",
    story: "There are so many great FREE software tutorials and courses on YouTube!I’ve also come across many other YouTube channels that provide amazing free programming tutorials. The free tutorials on these channels are as good or better than ones you would pay for:
    1.Coding train
    2.Travesy media
    3. Derek banas
    4. learn code
    5.Dev tips
    Add channels you may know of on the comments",
    time: 3
})
a9 = Article.create({
    user_id: u4.id,
    title: "How to start a company",
    topic: "Start up",
    story: "One year ago I quit my job to start Winnie, an app that connects parents with the local information they need most. At the time, my baby was just a few months old. Here are some tips
    1.Commitment
    2.Prepare your tasks
    3.Don't go it alone
    4.Ask actionable help
    5.Force yourself to do things imperfectly",
    time: 4
})
a10 = Article.create({
    user_id: u5.id,
    title: "Technology",
    topic: "Technology",
    story: "The strongest force propelling human progress has been the swift advance and wide diffusion of technology.In the year 1820, a person could expect to live less than 35 years, 94% of the global population lived in extreme poverty, and less that 20% of the population was literate. Today, human life expectancy is over 70 years, less that 10% of the global population lives in extreme poverty, and over 80% of people are literate. These improvements are due mainly to advances in technology, beginning in the industrial age and continuing today in the information age.There are many exciting new technologies that will continue to transform the world and improve human welfare.",
    time: 3
})

#comments
30.times do 
  Comment.create(
    article_id: rand(13..22),
    user_id: rand(9..13),
    #Generate random sentences.
    comment: Faker::Company.catch_phrase
  )
end

puts "✅ Done seeding"
