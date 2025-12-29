"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Eye, Search, Filter } from "lucide-react"
import { Logo } from "@/components/logo"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  summary: string
  content: string
  image: string
  category: string
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "What to Expect During Breast Cancer Recovery: Twin Sisters, Two Diagnoses, and a Shared Journey of Strength",
    author: "Ava & Leah Thompson",
    date: "August 1, 2024",
    summary: "When my twin sister, Leah, discovered a lump during a regular shower in late August, we never imagined how that moment would unravel both of our lives in such profound ways.",
    content: "When my twin sister, Leah, discovered a lump during a regular shower in late August, we never imagined how that moment would unravel both of our lives in such profound ways. I remember waiting for her outside the doctor's office, clutching a lukewarm cup of coffee while she went in for an ultrasound. One week later, I was sitting in that same office, waiting for my own results. Within ten days, we had both been diagnosed with breast cancer.\n\nLeah had Stage IIA, ER/PR-positive breast cancer. Mine was more aggressive—Stage IIB triple-negative. Medically, our journeys diverged, but emotionally, we were in this together every step of the way.\n\nRecovery was something neither of us were prepared for. No one talks about what happens after treatment ends—when the world assumes you're 'better,' but inside you still feel shattered.\n\nThe exhaustion came first. It was deeper than just being tired—it felt like my cells had been drained of energy. I remember lying in bed after my third round of chemo, trying to sit upright and feeling like gravity was winning. It wasn't just my body that was worn down; it was my spirit.\n\nLeah's treatment involved radiation, and although her path was different, she also experienced this profound fatigue. Every morning we would check in with each other with the same simple question: 'How's your heart today?'\n\nThere were emotional fractures too. I didn't expect the grief. I grieved for my hair, for my energy, for the spontaneity of my life. I stopped looking in the mirror. I didn't recognize the woman staring back—bald, pale, and scarred. Leah started journaling. One entry stayed with me: 'I miss my old laugh. I want to be funny again, not brave.' That line brought us both to tears. But that journal became a part of our healing. It recorded not just the pain but the progress—'I walked a mile today without pain,' or 'I let Ava call me beautiful, and I believed her.'\n\nThere were moments of unexpected kindness too. A nurse remembered our birthdays. A volunteer painted the infusion room with bright murals that made us smile. One day, we found a single pink rose in our mailbox with a handwritten note that simply said, 'You are stronger than you know.' During recovery, the smallest gestures can feel like lifelines.\n\nLeah and I decided to return that kindness. We began writing small notes to other patients in the waiting room. Just a few words to say, 'You're not alone.' It made us feel like we were part of something larger than our own pain.\n\nThen, slowly, life began to return. I got my first haircut post-chemo. It was just a trim of the peach fuzz that had grown in, but it felt like a ceremony. Leah's period returned after months of hormone therapy, and we both celebrated that little sign that her body was trying to reset. That summer, we went to the beach and stood in the freezing Atlantic Ocean. We screamed into the wind, 'We made it!' It was cathartic and joyful and completely wild.\n\nRecovery wasn't perfect. There were setbacks, infections, fear of recurrence, and emotional lows. But inch by inch, we rebuilt ourselves.\n\nNow, we volunteer at the same oncology center where we once sat as patients. We started a small podcast called 'Two is Stronger' where we talk about everything from medical updates to mental health to the messy, beautiful journey of survivorship.\n\nFor those in recovery, here is what we learned:\n\nThere is no timeline for healing. Your body will set the pace.\n\nIt's okay to grieve what cancer took from you—even after treatment ends.\n\nFind community. Healing is so much easier when shared.\n\nCelebrate the little things. A walk around the block, a good hair day, a deep breath without pain—they all matter.\n\nBe kind to yourself. You are still healing, even when it's invisible to others.\n\nYou are not falling behind. You are becoming whole again. One quiet, beautiful step at a time.\n\nWith love,\n\nAva & Leah",
    image: "/placeholder.jpg",
    category: "Recovery"
  },
  {
    id: 2,
    title: "Bravery, Baby Bottles, and Beating Breast Cancer",
    author: "Chantelle M.",
    date: "July 28, 2024",
    summary: "I was 28 when I found the lump. I wasn't doing a self-exam. Honestly, I was just trying to get my six-month-old daughter back to sleep.",
    content: "I was 28 when I found the lump. I wasn't doing a self-exam. Honestly, I was just trying to get my six-month-old daughter back to sleep. She'd been nursing more frequently that week, and during one late-night feeding, I felt something—firm, unmoving, and foreign.\n\nAt first, I told myself it was a clogged milk duct. I even tried warm compresses and massage. But deep down, I knew. This felt different.\n\nI made an appointment the next morning. The mammogram was fast-tracked. The biopsy followed. Within days, I was sitting in a quiet, beige room, holding my mother's hand and staring at the words 'invasive ductal carcinoma' on a printed report.\n\nBreast cancer. At twenty-eight. With a baby still in diapers.\n\nIt's funny. In that moment, I didn't cry. I remember thinking, 'Who's going to pack my daughter's lunch when I can't get out of bed? Will she remember me with hair?'\n\nI started treatment almost immediately. My oncologist was gentle but honest: because of my age and the aggressiveness of the tumor, we had to go in strong. Chemo. Mastectomy. Radiation. Fertility preservation was off the table—I didn't have time.\n\nChemo was brutal. I lost my hair quickly, and with it, a piece of the woman I used to be. But what I didn't lose was the fire inside me—the fierce, raw desire to be around for my daughter's first steps. Her first day of school. Her first heartbreak.\n\nSome days, I'd lie on the couch too weak to move while she crawled around beside me, babbling and cooing. I'd whisper stories to her, imagining a future I was determined to witness.\n\nPeople often called me brave. I didn't feel brave. I felt scared, tired, and broken. But I showed up anyway. I took every pill, sat through every infusion, and said yes to every scan. Because showing up was all I could control—and it was enough.\n\nAfter six rounds of chemo and a double mastectomy, I rang the bell. I didn't feel triumphant, just grateful. Grateful to have made it through. Grateful for the nurses who held my hand when the pain made me shake. Grateful for my mom, who moved in to help with the baby. Grateful to still be here.\n\nRecovery was not a straight line. There were infections, setbacks, and the emotional weight of looking at my scarred chest in the mirror. But there was also healing. My daughter took her first steps the same week I began physical therapy. We both wobbled, and we both kept going.\n\nNow, nearly three years later, I'm in remission. My daughter is a fierce little girl who says, 'Mommy's superpower is being strong.' And maybe she's right.\n\nCancer stripped me down to the most essential parts of myself. And what remained was enough: a mother, a fighter, a woman rebuilding herself from the inside out.\n\nI share my story because somewhere, there's another young mom feeling terrified and alone. I want her to know—this path is hard, but it's walkable. Your softness and your strength can exist in the same breath. And healing doesn't mean forgetting; it means learning to live again, even with the scars.\n\nTo anyone facing this diagnosis: hold on. You are not alone. And you are so much stronger than you think.\n\n— Chantelle M.",
    image: "/placeholder.jpg",
    category: "Young Women"
  },
  {
    id: 3,
    title: "From Biopsy to Becoming: How Breast Cancer Gave Me Back My Voice",
    author: "Barbara L.",
    date: "July 25, 2024",
    summary: "It started with an itch. That's what I tell people when they ask how I found it.",
    content: "It started with an itch. That's what I tell people when they ask how I found it. I scratched just above my left breast one evening and felt something—a small, pebble-like bump beneath the skin. I paused, pressed again. It didn't hurt, but it didn't feel right either.\n\nI was 42, healthy, active, the kind of person who drank kale smoothies and went to yoga on Saturdays. I never imagined that tiny lump would flip my world upside down.\n\nThe mammogram led to an ultrasound. Then a biopsy. The wait between the procedure and the phone call was the longest three days of my life. When the call came, I was standing in my kitchen stirring soup. My doctor's voice was calm but careful. 'Barbara, it's invasive ductal carcinoma. Stage 2.'\n\nI set the spoon down. My hands started to tremble. Cancer. The word filled the room like smoke.\n\nI told no one for 48 hours. I needed time to process it. I sat alone on my porch that evening and stared at the sky. I kept wondering how something so destructive could be quietly growing inside me while I went about my life—running errands, paying bills, laughing at bad sitcoms.\n\nThe treatment plan was aggressive: surgery, followed by chemotherapy, and then radiation. My first instinct was to retreat. I didn't want to lose my hair, my breasts, my rhythm. I didn't want to answer the dreaded question, 'How are you?' over and over again. But in that space between fear and decision, something strange happened.\n\nI began to listen. To myself. Really listen.\n\nFor the first time in years, I wasn't worried about deadlines, laundry, or whether I was being 'productive enough.' I was forced to stop. To breathe. To ask myself what I truly wanted from this one life.\n\nThe surgery came first. I remember the way the hospital gown felt scratchy against my skin. The way the anesthesiologist squeezed my hand and said, 'We'll take care of you.' When I woke up in recovery and looked down at the flatness beneath my bandages, I cried—not just from pain, but from grief. Saying goodbye to a part of myself wasn't just physical. It was symbolic. A version of me had ended.\n\nBut another version began.\n\nChemo was hard. There's no sugarcoating that. The nausea, the fatigue, the hollow feeling in my bones—it tested me in every way. I lost my hair. My skin turned pale. But I also found something I hadn't felt in years: clarity.\n\nI started writing again. Essays, poems, letters to friends I hadn't spoken to in years. I rediscovered a voice I'd buried under decades of obligations. I let people help me. I accepted meals, hugs, awkward conversations, and moments of shared silence. I realized that vulnerability wasn't weakness—it was connection.\n\nRadiation felt like the final stretch. The countdown on the wall. Every session brought me closer to the end of treatment, but strangely, I didn't feel like I was going 'back' to who I was before. I was becoming someone new—stronger, softer, more aware of the fragile, beautiful gift of life.\n\nNow, two years later, I'm cancer-free. My body carries the scars of what I've endured, and I wear them with pride. They are not reminders of pain—they are proof of survival.\n\nI volunteer now, helping newly diagnosed women navigate their first steps after hearing the words 'you have cancer.' I bring blankets to the chemo ward, offer encouragement, and listen without judgment. Because I know what it feels like to be scared, and I also know what it feels like to come out the other side.\n\nCancer changed my life, yes. But not just by taking something away. It gave me something too: a renewed purpose. A deeper sense of presence. A louder, unapologetic voice.\n\nIf you're in the thick of it right now—diagnosed, afraid, unsure of the road ahead—I want you to know: you are not alone. You are allowed to feel broken and brave at the same time. Healing is not a straight path, but every step forward, no matter how small, is a victory.\n\nYou've already started becoming. And that, in itself, is everything.\n\n— Barbara L.",
    image: "/placeholder.jpg",
    category: "Transformation"
  },
  {
    id: 4,
    title: "More Than a Diagnosis: Aimee's Story of Strength Through Angiosarcoma",
    author: "Aimee",
    date: "July 22, 2024",
    summary: "At just 30 years old, Aimee's world shifted in a way few can imagine.",
    content: "At just 30 years old, Aimee's world shifted in a way few can imagine.\n\nIt started with something so small—barely noticeable, really. A subtle bump near her cheekbone. She chalked it up to stress or maybe a skin irritation. But when it didn't go away, she trusted her instincts and sought answers. What followed was a whirlwind of appointments, scans, and specialists, culminating in a diagnosis she had never heard before: angiosarcoma.\n\nAimee had cancer.\n\nBut not just any cancer. This was a rare and aggressive form—angiosarcoma of the face. It was a diagnosis that came with more questions than answers, and more fear than she knew how to hold.\n\nWhen you're young, cancer isn't part of your plans. Life is supposed to be about building your career, taking spontaneous trips, laughing with friends over coffee. For Aimee, that version of life paused the moment she heard the word 'angiosarcoma.'\n\n'I had no roadmap,' she later said. 'No one I knew had faced this. I couldn't even pronounce it properly at first.'\n\nTreatment began quickly. Surgery to remove the tumor. Radiation to make sure it didn't come back. The physical toll was immense—but the emotional toll cut even deeper. Her face, the part of herself she used to greet the world, was now marked by something out of her control. There were days she didn't recognize her reflection.\n\nBut cancer didn't get the final say.\n\nAimee found resilience in unexpected places. In quiet mornings when she'd gather strength just to get out of bed. In the unwavering support of her loved ones who reminded her she was more than her diagnosis. In writing blog posts about her journey, which gave her purpose on the darkest days. Through her words, she connected with others navigating their own battles with rare diseases. Slowly, she began to reclaim her life—not by going back to who she was, but by becoming someone even stronger.\n\nToday, Aimee is a survivor. Her scans are clear. Her voice is louder. And her story has become a beacon for others who feel lost after hearing the words: 'You have cancer.'\n\nThough her illness wasn't breast cancer, her path mirrored the same courage, vulnerability, and grit seen in every cancer journey. She reminds us that rare doesn't mean alone—and that even in the face of an uncertain diagnosis, hope is always worth holding onto.\n\n'I wear my scars proudly now,' Aimee says. 'Not because I wanted them, but because they prove I made it through.'\n\nHer story isn't just about illness. It's about identity, strength, and rediscovering purpose after life takes an unexpected turn.\n\nTo every woman navigating the unknown: may Aimee's story remind you that no diagnosis can define your worth—and that healing is not just possible, it's powerful.\n\n— Aimee.",
    image: "/placeholder.jpg",
    category: "Rare Cancer"
  },
  {
    id: 5,
    title: "Stephanie Phillips: Shredding Through Cancer with Courage and Grace",
    author: "Amy Wolf",
    date: "July 19, 2024",
    summary: "At 28, Stephanie Phillips was living the dream. She was young, active, and thriving in the snowboarding world.",
    content: "At 28, Stephanie Phillips was living the dream.\n\nShe was young, active, and thriving in the snowboarding world—splitting her days between mountain air, adrenaline-filled slopes, and a community that felt like home. Cancer was the furthest thing from her mind. But life has a way of throwing the unexpected your way.\n\nStephanie was diagnosed with breast cancer at an age when most people are planning trips, chasing goals, and building careers—not navigating biopsies and chemotherapy appointments.\n\n'I was healthy, I was fit, I had no family history,' she later shared. 'It didn't feel real.'\n\nThe diagnosis came like a gut punch. One moment, she was planning her next snowboarding trip. The next, she was faced with conversations about tumors, treatment plans, and the possibility of losing her hair—and maybe her fertility.\n\nBut if there's one thing snowboarding teaches you, it's how to fall—and get back up.\n\nStephanie leaned on that grit during every step of her cancer journey. She made space for the fear, but she didn't let it take over. Between chemo sessions, she still showed up at the mountain, not always to ride, but to stay connected to the life she loved. She made the decision to freeze her eggs, giving herself the chance to reclaim her future beyond cancer. And through it all, she stayed involved with Boarding for Breast Cancer (B4BC), a nonprofit that blends education, prevention, and support through action sports.\n\nHer board became a symbol—not just of sport, but of survival.\n\nEven on the days her body felt like it was betraying her, Stephanie's spirit held steady. She chose joy when she could. She showed up when it was hard. And most of all, she refused to let cancer tell her who she could or couldn't be.\n\nToday, Stephanie is cancer-free—and more determined than ever to help others find their footing after diagnosis. She speaks openly about the mental toll of treatment, the difficult decisions around fertility, and the importance of listening to your body, no matter your age. She's proof that strength isn't just physical—it's emotional, spiritual, and rooted in showing up for yourself over and over again.\n\n'I didn't let cancer take my joy,' she says. 'I chose to live fully, even in the middle of it.'\n\nStephanie's journey is a reminder that cancer doesn't just happen to older people. It doesn't care about your fitness level or your dreams. But it also doesn't get to dictate how you move forward.\n\nShe carved her own path—through the mountain, through treatment, through recovery—and came out the other side stronger, clearer, and deeply committed to helping others ride through the storm too.\n\nHer story isn't just one of survival—it's one of fierce determination, love for life, and the power of community on and off the slopes.\n\n—- Amy Wolf",
    image: "/placeholder.jpg",
    category: "Athletes"
  },
  {
    id: 6,
    title: "James Pribram: Riding Waves and Raising Awareness",
    author: "Lisa Shustack",
    date: "July 16, 2024",
    summary: "When we talk about breast health, the narrative usually centers around women—and rightly so. But James Pribram's story is a powerful reminder that men are part of this conversation too.",
    content: "When we talk about breast health, the narrative usually centers around women—and rightly so. But James Pribram's story is a powerful reminder that men are part of this conversation too.\n\nA professional surfer, environmentalist, and lifelong waterman, James was no stranger to the limits of the human body. He had pushed himself across towering waves and unpredictable tides, but nothing prepared him for the moment he discovered a lump in his chest.\n\nIt wasn't just a bump or soreness from a wipeout—it felt off. It was the kind of thing easy to ignore, easy to brush aside, especially as a man. But James listened to his intuition and got it checked.\n\nThe diagnosis? A benign breast tumor.\n\nThough it wasn't cancerous, the scare was real. And it opened James' eyes to something he hadn't seen before—how deeply vulnerable a person can feel in that space between fear and the unknown. In that moment, he felt a deep wave of empathy for women going through breast cancer diagnoses and treatment—an emotional understanding he hadn't experienced so personally before.\n\nInstead of letting that fear pass quietly, James chose to speak up.\n\nHe started sharing his story—not just with his friends or surf community, but on public platforms, hoping his voice could help shift the stigma. Men don't often talk about their bodies this way. They're taught to tough it out, stay silent, and certainly not speak of breast lumps. But James knew that silence could be dangerous.\n\nThrough his work with Boarding For Breast Cancer (B4BC), he became an advocate—not only for awareness, but for empathy. He encouraged men to check themselves too, and to support the women in their lives through knowledge, conversation, and presence.\n\nSurfing gave James a platform. Storytelling gave him a purpose.\n\nBy blending both, he continues to break down barriers, one wave at a time. His story reminds us that awareness doesn't belong to one gender. Health doesn't discriminate. And that courage can look like speaking up—even when no one expects you to.\n\nBecause sometimes, the most powerful thing you can do is simply share your truth—and let the ripple effect begin.\n\n—- Lisa Shustack",
    image: "/placeholder.jpg",
    category: "Men's Health"
  },
  {
    id: 7,
    title: "Alison Brock – A Mother's Journey Back to Peace",
    author: "Alison Brock",
    date: "July 13, 2024",
    summary: "When Alison Brock heard the words no one ever expects—'you have cancer'—life took a sharp turn.",
    content: "When Alison Brock heard the words no one ever expects—'you have cancer'—life took a sharp turn. As a devoted mother of three, her battle wasn't just about treatment. It became a mission to protect her well-being, preserve her peace, and remain present for the people she loves most.\n\nThroughout chemotherapy, Alison experienced the intense physical and emotional toll that cancer treatment often brings. But instead of surrendering to the exhaustion and uncertainty, she sought tools to help her navigate the journey with grace and strength.\n\nShe discovered healing through a holistic approach—blending mind, body, and spirit.\n\nEmotional Freedom Techniques (EFT), a gentle tapping method, became her anchor during waves of anxiety and fear. Through EFT, Alison processed emotions that often remained unspoken, finding release and clarity with each session.\n\nYoga provided both strength and serenity. On the mat, Alison reclaimed her body, tuning in to breath and movement that offered peace amid the chaos of treatment.\n\nWith Ayurveda, she embraced a lifestyle that honored her body's rhythms. This ancient system of wellness guided her toward nourishing foods, better sleep, and intentional self-care, all of which supported her healing from the inside out.\n\nMeditation became her daily sanctuary. In stillness, she found calm. In quiet, she found resilience.\n\nBy weaving these practices into her life, Alison didn't just manage the side effects of chemotherapy—she discovered a deeper form of healing that touched every part of her being.\n\nHer story is not only one of survival but of conscious transformation. She chose to listen to her body, nurture her spirit, and hold space for peace, even in the midst of pain.\n\nToday, Alison's journey is a beautiful reminder that healing isn't only medical—it's emotional, spiritual, and deeply personal. And that reclaiming wellness is just as much about coming home to yourself as it is about moving forward.\n\n— Alison Brock.",
    image: "/placeholder.jpg",
    category: "Holistic Healing"
  },
  {
    id: 8,
    title: "Finding Light in the Darkness – A Graphic Artist's Journey Through Stage 3 Cancer",
    author: "Rose",
    date: "July 10, 2024",
    summary: "When a graphic artist and mother of two was diagnosed with stage 3 cancer, her world cracked open.",
    content: "When a graphic artist and mother of two was diagnosed with stage 3 cancer, her world cracked open. The diagnosis came like a lightning strike—jarring, life-altering, and terrifying. Suddenly, she wasn't just a creator of color and design. She was a fighter. A protector. A woman navigating the weight of mortality with two young daughters watching.\n\nIn the early days, she faced fear like never before. There were scans and surgeries, appointments that blurred together, and the overwhelming dread of the unknown. But even in that darkness, she began seeking flickers of light.\n\nGratitude became her first lifeline. She started small—thankful for the taste of her morning tea, a gentle hug from her daughters, the warmth of sun on her face. These tiny acknowledgments, once easy to overlook, became powerful reminders that joy still existed.\n\nShe turned to journaling as a way to process the emotional storm within. Her journal wasn't neat or poetic. It was raw, messy, sometimes angry. But it was hers—a space where she didn't have to be strong or cheerful. Just honest.\n\nAs an artist, she instinctively gravitated back to visual expression. Even when her body was weary from treatment, her hands found strength in sketching. She painted feelings she couldn't describe, blending fear and hope into color. Her daughters joined her at times, making art together as a form of healing. Their shared creations turned into symbols of resilience—visual proof that something beautiful could grow even in the darkest soil.\n\nRoutine, too, became a silent anchor. Waking up at the same time each day, eating nourishing meals, walking when she could—all these small rituals offered structure in a world that suddenly felt chaotic. They reminded her she still had control over some parts of her life, even if the cancer journey felt unpredictable.\n\nSlowly, the joy returned—not in the loud, obvious ways, but in quiet moments of connection, in laughter around the kitchen table, in a finished drawing pinned to the fridge.\n\nHer story is not just about surviving cancer. It's about choosing joy despite it. It's about finding strength in softness and healing in creativity. And it's a powerful reminder to all of us: no matter the storm, light can still seep in.\n\n— Rose.",
    image: "/placeholder.jpg",
    category: "Art & Healing"
  },
  {
    id: 9,
    title: "Life After Breast Cancer: Surviving & Thriving",
    author: "Jo Ann Bono",
    date: "July 7, 2024",
    summary: "The end of treatment is often seen as a finish line—but for many breast cancer survivors, it marks the beginning of an entirely different journey.",
    content: "The end of treatment is often seen as a finish line—but for many breast cancer survivors, it marks the beginning of an entirely different journey. Life after cancer is complex. It's not simply about surviving, but learning how to live again—how to thrive despite the scars left behind, both visible and invisible.\n\nAfter a mastectomy, physical healing is only part of the equation. There's the tightness, the nerve pain, the phantom sensations where there used to be something whole. Clothing feels different. So does looking in the mirror. It takes courage to relearn your body—to gently accept its new shape, its strength, its resilience.\n\nBut perhaps even more profound is the emotional healing. The fear doesn't just vanish. There's anxiety about recurrence, grief over what was lost, and sometimes guilt for surviving. It can feel incredibly lonely—even with loving people around. That's why accepting help becomes so important. Whether it's letting someone cook a meal, drive to a doctor's appointment, or simply sit quietly beside you, learning to receive without guilt is a radical act of healing.\n\nThe recovery process rarely comes in grand leaps. Instead, it's found in the quiet victories of daily life: getting out of bed on a hard morning, laughing unexpectedly, walking a bit farther than the day before. It's in choosing to believe that joy and softness are still possible—and that you deserve them.\n\nTrue healing isn't linear. But with self-compassion, patience, and a little help along the way, life after breast cancer can become a story not just of survival—but of rediscovery, empowerment, and peace.\n\n— Jo Ann Bono",
    image: "/placeholder.jpg",
    category: "Survivorship"
  },
  {
    id: 10,
    title: "Navigating Life After Breast Cancer",
    author: "Joy Clarkson",
    date: "July 4, 2024",
    summary: "Life after breast cancer isn't about returning to the way things were—it's about adjusting to a 'new normal.'",
    content: "Life after breast cancer isn't about returning to the way things were—it's about adjusting to a 'new normal.' The journey doesn't end with the final treatment; instead, it continues with fresh challenges, quiet fears, and the hope of healing.\n\nFatigue lingers even after the body is declared cancer-free. Simple tasks become exhausting, and energy must be carefully rationed. Small routines—gentle walks, stretches, and moments of rest—become grounding anchors.\n\nThe fear of recurrence is always present. A sudden ache or unusual symptom can stir anxiety. Yet rather than living in fear, it's about learning to acknowledge it without letting it dominate. Each doctor's visit becomes a moment of courage—a step toward trust in the body's resilience.\n\nSupport from others makes a profound difference. Finding community among those who understand the path helps ease isolation. Shared experiences offer comfort, perspective, and connection that medicine alone cannot provide.\n\nWellness now means something different. It's not about perfection or bouncing back—it's about listening to the body, nourishing it with care, and honoring emotional needs. Mindfulness, nutrition, movement, and joy take priority over stress and productivity.\n\nThrough this journey, purpose begins to emerge again. Whether through supporting others, finding joy in everyday life, or reconnecting with passions, healing becomes about more than recovery—it becomes a way of living with intention, gratitude, and grace.\n\n— Joy Clarkson",
    image: "/placeholder.jpg",
    category: "Recovery"
  },
  {
    id: 11,
    title: "Mothering Through Stage 4",
    author: "Lucy Vaughan",
    date: "July 1, 2024",
    summary: "When Lucy Vaughan was diagnosed with stage 4 cancer during her pregnancy, the news turned her world upside down.",
    content: "When Lucy Vaughan was diagnosed with stage 4 cancer during her pregnancy, the news turned her world upside down. What followed was a series of heart-wrenching decisions and a journey defined by unimaginable strength and love.\n\nLucy was in her third trimester when she learned of her diagnosis. She had to choose between beginning treatment immediately or waiting until after her baby was born. Her decision placed her unborn child first—delaying treatment so her baby could grow just a little longer. It was a decision rooted in maternal instinct and profound courage.\n\nAfter giving birth, Lucy began treatment, only to learn that the cancer had spread. Secondary metastasis brought a new wave of fear—but not surrender. With grace and grit, Lucy committed to making every moment count, focusing on presence, joy, and connection over fear and despair.\n\nMotherhood became both her anchor and her fuel. Caring for her child gave her strength, even in the hardest moments. She approached each day with intention—whether it was reading a bedtime story, watching her child take a first step, or simply being present at the breakfast table.\n\nLucy's message is one of resilience. She emphasizes the power of hope—not the blind kind, but the kind forged in truth, grit, and fierce love. She reminds others that life, even with cancer, can hold meaning, laughter, and deep beauty.\n\nHer story is not just about illness. It's about choosing life, over and over again.\n\n— Lucy Vaughan",
    image: "/placeholder.jpg",
    category: "Pregnancy"
  },
  {
    id: 12,
    title: "Living Out Loud: Natalie Kwadrans' Story of Advocacy and Action",
    author: "Natalie Kwadrans",
    date: "June 28, 2024",
    summary: "Natalie Kwadrans never expected her life as a competitive athlete and public speaker to take such a sharp turn.",
    content: "Natalie Kwadrans never expected her life as a competitive athlete and public speaker to take such a sharp turn. Diagnosed with stage 4 breast cancer, she chose not just to survive—but to become a voice, a teacher, and a light for others navigating the same storm.\n\nAn accomplished athlete, Natalie approached her diagnosis like training for a marathon: with discipline, honesty, and an unflinching belief in the power of preparation. But she also knew that no amount of strength could prepare a family—especially children—for the realities of cancer. That's where her creativity stepped in.\n\nNatalie began documenting her experience in a blog, sharing the highs, lows, and everything in between. She was unafraid to speak plainly about the fears and frustration, the mental toll of treatment, and the fatigue that often went unseen. Her writing resonated because it was real.\n\nWhat made Natalie's advocacy especially unique was her creation of comic strips designed for children—accessible, empathetic storytelling that helped families talk about cancer in a way that felt safe. Her comics helped kids understand what their parents or loved ones might be going through—without fear, without shame.\n\nAs a stage 4 warrior, Natalie uses her platform to call for earlier screenings and better education. She is a spokesmodel not for perfection, but for truth and preparedness. Her message is simple: 'You don't have to be fearless to be strong.'\n\nEven amid ongoing treatment, Natalie continues to run, speak, and create. She doesn't hide her diagnosis—she lives through it, with humor, grace, and a refusal to be silenced.\n\n— Natalie Kwadrans",
    image: "/placeholder.jpg",
    category: "Advocacy"
  },
  {
    id: 13,
    title: "Teaching Through Tumor: The Enduring Wisdom of Yu Juan",
    author: "Yu Juan",
    date: "June 25, 2024",
    summary: "Yu Juan was just 30 when she was diagnosed with breast cancer. A beloved lecturer at Fudan University in Shanghai.",
    content: "Yu Juan was just 30 when she was diagnosed with breast cancer. A beloved lecturer at Fudan University in Shanghai, her life had been dedicated to education. She had spent years inspiring students, sharing knowledge, and building a career she loved. But cancer doesn't discriminate based on age, passion, or purpose.\n\nWhen the diagnosis came, Yu Juan faced a choice: retreat into fear or use her experience to teach others about resilience, hope, and the power of community. She chose the latter.\n\nThroughout her treatment, Yu Juan continued to teach—not just academic subjects, but life lessons about courage, vulnerability, and the strength found in asking for help. She used her platform to educate others about breast cancer awareness, early detection, and the importance of self-advocacy in healthcare.\n\nHer classroom became a space where difficult conversations could happen. She shared her journey openly, not to seek sympathy, but to normalize the experience and show that illness doesn't define a person's worth or capabilities.\n\nYu Juan's story is a testament to the enduring power of education—not just formal learning, but the wisdom that comes from lived experience. She taught her students that strength isn't about never falling, but about getting up each time you do.\n\nToday, Yu Juan continues to inspire through her writing, speaking, and advocacy work. She reminds us that education isn't just about what we learn in books—it's about how we grow through life's challenges and share that wisdom with others.\n\n— Yu Juan",
    image: "/placeholder.jpg",
    category: "Education"
  },
  {
    id: 14,
    title: "A Roller‑Coaster Third Battle: Living with Hope After Recurrent Cancer",
    author: "Sandra",
    date: "June 22, 2024",
    summary: "She never thought she'd have to do it again. And yet, for the third time, the diagnosis came: breast cancer.",
    content: "She never thought she'd have to do it again. And yet, for the third time, the diagnosis came: breast cancer. For the woman behind the blog Me, Myself & Breast Cancer, this wasn't just another battle—it was a testament to resilience, hope, and the unbreakable human spirit.\n\nThe first diagnosis had been terrifying. The second had been devastating. But the third? It brought a different kind of challenge—one that tested not just her body, but her faith in the future.\n\nYet, through it all, Sandra chose to document her journey with honesty, humor, and raw vulnerability. Her blog became a lifeline for others facing recurrent cancer, offering not just information, but genuine connection and understanding.\n\nShe learned that hope isn't about denying the reality of her situation—it's about finding light even in the darkest moments. It's about celebrating small victories, cherishing time with loved ones, and finding purpose in helping others navigate similar paths.\n\nSandra's story reminds us that cancer doesn't get to write the final chapter. Even in the face of recurrence, there's room for joy, love, and meaningful experiences. Her journey is proof that the human spirit can endure, adapt, and find beauty even in the most challenging circumstances.\n\n— Sandra",
    image: "/placeholder.jpg",
    category: "Recurrence"
  },
  {
    id: 15,
    title: "Thriving Beyond the Diagnosis: Stories of Strength, Change, and Self-Discovery",
    author: "Donna Balut",
    date: "June 19, 2024",
    summary: "When cancer enters your life, it doesn't just affect your body—it rewrites the script.",
    content: "When cancer enters your life, it doesn't just affect your body—it rewrites the script. For several women reflecting on their multi-year journeys with ductal carcinoma in situ (DCIS), the diagnosis became a catalyst for profound personal transformation.\n\nThese women discovered that surviving cancer wasn't just about medical treatment—it was about rediscovering themselves, their priorities, and their purpose. They learned to advocate for their health, to trust their instincts, and to find strength in vulnerability.\n\nThrough their shared experiences, they formed a community of support, understanding, and mutual encouragement. They discovered that healing isn't linear—it's messy, beautiful, and deeply personal.\n\nTheir stories remind us that cancer doesn't just take—it also gives. It gives clarity about what truly matters. It gives courage to speak up and ask for what you need. It gives perspective on the preciousness of life and the importance of living authentically.\n\nThese women didn't just survive their diagnosis—they thrived beyond it, becoming stronger, wiser, and more compassionate versions of themselves.\n\n— Donna Balut",
    image: "/placeholder.jpg",
    category: "Transformation"
  },
  {
    id: 16,
    title: "Reborn Through Fire: A Young Doctor's Journey After Triple-Positive Breast Cancer",
    author: "Elaine",
    date: "June 16, 2024",
    summary: "She was a young doctor, barely into her career, when the diagnosis came. Triple-positive breast cancer.",
    content: "She was a young doctor, barely into her career, when the diagnosis came. Triple-positive breast cancer. The words felt clinical at first—abstract even. But suddenly, she wasn't just treating patients—she was one.\n\nThe irony wasn't lost on her. Here she was, trained to heal others, now facing her own battle with illness. The medical knowledge that had once been her strength now became both a blessing and a curse—she understood the science, the statistics, the potential outcomes. But understanding didn't make it easier.\n\nThrough treatment, she gained a new perspective on healthcare. She learned what it felt like to be on the other side of the stethoscope—the vulnerability, the fear, the need for compassion that goes beyond clinical expertise.\n\nHer experience transformed her approach to medicine. She became not just a doctor, but a healer who truly understood the human side of illness. Her patients found comfort in knowing she had walked their path.\n\nToday, she uses her dual perspective to advocate for patient-centered care, emphasizing the importance of treating the whole person, not just the disease. Her journey reminds us that sometimes the best healers are those who have been broken and rebuilt.\n\n— Elaine",
    image: "/placeholder.jpg",
    category: "Medical Professionals"
  },
  {
    id: 17,
    title: "The Quiet Storm: Jamelle Singleton's Fight to Be Seen",
    author: "Jamelle Singleton",
    date: "June 13, 2024",
    summary: "When Jamelle Singleton first felt the lump, she knew something was wrong. She wasn't a stranger to the world of medicine.",
    content: "When Jamelle Singleton first felt the lump, she knew something was wrong. She wasn't a stranger to the world of medicine. She knew her body. She knew what didn't feel right. But getting others to listen—that was a different challenge entirely.\n\nAs a Black woman, Jamelle faced barriers that went beyond the medical. She encountered dismissive attitudes, delayed diagnoses, and a healthcare system that often failed to see her as an individual with valid concerns.\n\nBut Jamelle refused to be silenced. She became her own advocate, researching, asking questions, and demanding the care she deserved. She learned that persistence wasn't just about getting treatment—it was about being seen, heard, and respected.\n\nThrough her journey, Jamelle discovered the power of community and the importance of representation in healthcare. She began advocating for others, sharing her story to raise awareness about the disparities in breast cancer care and outcomes.\n\nHer fight wasn't just for herself—it was for every woman who had been overlooked, dismissed, or made to feel invisible in the healthcare system. She became a voice for those who had been silenced.\n\nToday, Jamelle continues to advocate for health equity, working to ensure that every woman, regardless of race or background, receives the care and respect she deserves.\n\n— Jamelle Singleton",
    image: "/placeholder.jpg",
    category: "Advocacy"
  },
  {
    id: 18,
    title: "The Brightest Light: Miranda McKeon's Story of Resilience at 19",
    author: "Miranda McKeon",
    date: "June 10, 2024",
    summary: "When most college freshmen are navigating dorm life, class schedules, and the thrill of independence, Miranda McKeon was grappling with something few her age could imagine.",
    content: "When most college freshmen are navigating dorm life, class schedules, and the thrill of independence, Miranda McKeon was grappling with something few her age could imagine: stage 3 breast cancer.\n\nAt 19, Miranda's world was supposed to be about first loves, late-night study sessions, and discovering who she was becoming. Instead, she found herself facing a diagnosis that most people associate with older women.\n\nBut Miranda refused to let cancer define her youth. She approached her treatment with the same determination she brought to her studies, her relationships, and her dreams. She learned to advocate for herself in medical settings, to ask questions, and to trust her instincts.\n\nThrough social media, Miranda began sharing her journey with honesty and vulnerability. She connected with other young women facing similar challenges, creating a community of support and understanding. Her story resonated because it was real—she didn't sugarcoat the hard parts, but she also celebrated the moments of joy and connection.\n\nMiranda's resilience inspired others to speak up about their own experiences, breaking down the stigma around young women and cancer. She proved that strength isn't about age—it's about courage, authenticity, and the willingness to keep showing up.\n\nToday, Miranda continues to advocate for young women's health, emphasizing the importance of self-exams, early detection, and trusting your body. Her story reminds us that cancer doesn't discriminate by age, and neither should our compassion or support.\n\n— Miranda McKeon",
    image: "/placeholder.jpg",
    category: "Young Women"
  },
  {
    id: 19,
    title: "Thank You, Scars: A Beauty Editor's Love Letter to Her Survival",
    author: "Paige Stables",
    date: "June 7, 2024",
    summary: "In the mirror, Paige Stables no longer sees just skin and symmetry. She sees stories—etched in soft, raised lines that stretch across her chest.",
    content: "In the mirror, Paige Stables no longer sees just skin and symmetry. She sees stories—etched in soft, raised lines that stretch across her chest. Where once society told her beauty resided, she now sees proof of survival, strength, and resilience.\n\nAs a beauty editor, Paige had spent years defining beauty for others. But cancer forced her to redefine it for herself. She learned that beauty isn't about perfection—it's about authenticity, courage, and the stories our bodies carry.\n\nHer scars became her teachers. They reminded her of the battles she'd fought, the strength she'd discovered, and the life she'd chosen to fight for. They became symbols not of loss, but of victory.\n\nPaige began sharing her journey through writing and photography, challenging conventional beauty standards and celebrating the beauty found in survival. She connected with other women who were learning to love their bodies after cancer, creating a community of acceptance and celebration.\n\nHer story reminds us that beauty is not about hiding our scars—it's about embracing them as part of our story. It's about finding strength in vulnerability and celebrating the resilience of the human body.\n\nToday, Paige continues to advocate for body positivity and self-acceptance, helping others see their scars not as flaws, but as badges of honor.\n\n— Paige Stables",
    image: "/placeholder.jpg",
    category: "Body Image"
  },
  {
    id: 20,
    title: "Wearing Survival Proudly: 12 Women Who Turned Scars Into Power",
    author: "Angela Shammo",
    date: "June 4, 2024",
    summary: "For generations, women were told to hide the parts of themselves that didn't fit into a narrow, idealized image of beauty.",
    content: "For generations, women were told to hide the parts of themselves that didn't fit into a narrow, idealized image of beauty. Scars, especially from mastectomies, were to be tucked away, covered up, and never spoken of. But these 12 women decided to rewrite that narrative.\n\nThey chose to wear their survival proudly, turning their scars into symbols of strength, resilience, and victory. Through photography, art, and storytelling, they created a movement that celebrates the beauty found in survival.\n\nEach woman's story is unique, but they share a common thread: the courage to be seen, exactly as they are. They refused to let society's narrow definitions of beauty define their worth or their story.\n\nTheir collective voice has inspired countless others to embrace their own scars, to see them not as flaws, but as proof of the battles they've fought and won. They've created a community where vulnerability is celebrated and authenticity is beautiful.\n\nThese women remind us that true beauty isn't about conforming to standards—it's about embracing our unique stories and finding power in our truth.\n\n— Angela Shammo",
    image: "/placeholder.jpg",
    category: "Body Image"
  },
  {
    id: 21,
    title: "The Scar Project: Uncovering Beauty, Pain, and Power in the Aftermath of Cancer",
    author: "David Jay",
    date: "June 1, 2024",
    summary: "What if we stopped hiding the truth about breast cancer? What if we showed it—unfiltered, unedited, unapologetic?",
    content: "What if we stopped hiding the truth about breast cancer? What if we showed it—unfiltered, unedited, unapologetic? That's the question The Scar Project set out to answer.\n\nThrough powerful photography, this project captures the raw reality of breast cancer's aftermath. It shows the scars, the strength, and the stories of women who have faced one of life's most challenging battles.\n\nThe images are not meant to shock or sensationalize—they're meant to educate, to normalize, and to celebrate the resilience of the human spirit. They challenge us to see beauty in survival, strength in vulnerability, and power in authenticity.\n\nEach photograph tells a story of courage, of survival, and of the unbreakable human spirit. They remind us that cancer doesn't just affect the body—it transforms the soul, leaving behind not just scars, but wisdom, strength, and a deeper appreciation for life.\n\nThe Scar Project has become more than just a photography series—it's a movement that has inspired countless women to embrace their own stories and find beauty in their survival.\n\n— David Jay",
    image: "/placeholder.jpg",
    category: "Photography"
  },
  {
    id: 22,
    title: "Christina Bemis — Courage Through Recurrence",
    author: "Christina Bemis",
    date: "May 29, 2024",
    summary: "Christina Bemis's journey through breast cancer is not defined solely by one diagnosis, but by the strength she summoned twice to face it.",
    content: "Christina Bemis's journey through breast cancer is not defined solely by one diagnosis, but by the strength she summoned twice to face it. A vibrant woman with a deep intuition, Christina learned to trust her body's wisdom and advocate fiercely for her health.\n\nWhen the cancer returned, Christina faced a different kind of challenge—one that tested not just her physical strength, but her emotional resilience and her faith in the future. But she refused to let fear define her journey.\n\nThrough her recurrence, Christina discovered a deeper understanding of what it means to be a survivor. She learned that courage isn't about never being afraid—it's about being afraid and moving forward anyway. She found strength in community, in spirituality, and in the simple act of choosing hope each day.\n\nChristina's story reminds us that cancer doesn't always follow a linear path. Sometimes it returns, bringing with it new challenges and new opportunities for growth. But through it all, Christina has remained a beacon of light, showing others that it's possible to find joy, purpose, and meaning even in the face of uncertainty.\n\nHer journey is a testament to the power of resilience, the importance of self-advocacy, and the beauty of choosing to live fully, no matter what challenges life brings.\n\n— Christina Bemis",
    image: "/placeholder.jpg",
    category: "Recurrence"
  },
  {
    id: 23,
    title: "Rinaa Peter — Two-Time Survivor from India",
    author: "Rinaa Peter",
    date: "May 26, 2024",
    summary: "In 2018, Rinaa Peter's life was abruptly changed by a diagnosis that no one is ever prepared to hear—breast cancer.",
    content: "In 2018, Rinaa Peter's life was abruptly changed by a diagnosis that no one is ever prepared to hear—breast cancer. At the time, she was a vibrant woman in India, living a life filled with family, career, and dreams for the future. But cancer doesn't respect borders, cultures, or life plans.\n\nRinaa's journey through treatment was marked by both the universal challenges of cancer and the unique cultural context of her experience. She faced not just the physical toll of treatment, but also the stigma and misconceptions surrounding cancer in her community.\n\nBut Rinaa refused to be defined by her diagnosis. She became an advocate for cancer awareness in India, working to break down barriers and educate others about early detection and treatment options. She used her voice to challenge cultural taboos and create space for honest conversations about health.\n\nThrough her advocacy, Rinaa has helped countless other women in India and around the world. She's shown that cancer doesn't discriminate by nationality or culture—it affects us all, and we all have the power to fight back.\n\nHer story is a reminder that strength and resilience are universal human qualities, transcending borders and cultural differences.\n\n— Rinaa Peter",
    image: "/placeholder.jpg",
    category: "International"
  },
  {
    id: 24,
    title: "Flying Beyond Cancer: The Journey of Marenda Taylor",
    author: "Marenda Taylor",
    date: "May 23, 2024",
    summary: "Marenda Taylor was living a high-flying life—literally. As an airline flight attendant, her days were filled with busy schedules, airports, and travel to cities around the world.",
    content: "Marenda Taylor was living a high-flying life—literally. As an airline flight attendant, her days were filled with busy schedules, airports, and travel to cities around the world. But cancer doesn't care about your career plans or your love for adventure.\n\nWhen Marenda was diagnosed with breast cancer, she faced not just the physical challenges of treatment, but also the uncertainty of how it would affect her career. Would she be able to return to the skies? Would her body be strong enough to handle the demands of her job?\n\nBut Marenda refused to let cancer ground her dreams. She approached her treatment with the same determination and professionalism she brought to her work. She learned to advocate for herself in the workplace, to ask for accommodations when needed, and to trust her body's wisdom.\n\nThrough her journey, Marenda discovered that strength isn't just physical—it's also about resilience, adaptability, and the courage to keep pursuing your passions. She proved that cancer doesn't have to mean the end of your career or your dreams.\n\nToday, Marenda continues to fly, sharing her story to inspire others who are facing similar challenges. She reminds us that with determination and support, it's possible to soar beyond any obstacle.\n\n— Marenda Taylor",
    image: "/placeholder.jpg",
    category: "Career"
  },
  {
    id: 25,
    title: "Courage Through Recurrence: Christina Bemis' Journey of Strength and Self-Trust",
    author: "Christina Bemis",
    date: "May 20, 2024",
    summary: "For many, hearing the words 'you have breast cancer' is the hardest moment of their lives. For Christina Bemis, she had to face that moment twice.",
    content: "For many, hearing the words 'you have breast cancer' is the hardest moment of their lives. For Christina Bemis, she had to face that moment twice. Her journey is not just one of survival—it's a testament to the power of resilience, self-trust, and the courage to keep fighting.\n\nWhen the cancer returned, Christina faced a different kind of challenge. She had to summon not just physical strength, but emotional fortitude and spiritual resilience. She learned to trust her intuition, to advocate fiercely for her health, and to find strength in vulnerability.\n\nThrough her recurrence, Christina discovered that courage isn't about never being afraid—it's about being afraid and moving forward anyway. She learned to celebrate small victories, to find joy in everyday moments, and to appreciate the preciousness of life.\n\nChristina's story reminds us that cancer doesn't always follow a predictable path. Sometimes it returns, bringing with it new challenges and new opportunities for growth. But through it all, Christina has remained a beacon of hope, showing others that it's possible to find meaning and purpose even in the face of uncertainty.\n\nHer journey is a powerful reminder that we are stronger than we think, more resilient than we know, and capable of finding light even in the darkest moments.\n\n— Christina Bemis",
    image: "/placeholder.jpg",
    category: "Recurrence"
  }
]

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Recovery", "Young Women", "Transformation", "Rare Cancer", "Athletes", "Men's Health", "Holistic Healing", "Art & Healing", "Survivorship", "Pregnancy", "Advocacy", "Education", "Recurrence", "Medical Professionals", "Body Image", "Photography", "International", "Career"]

  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header with Logo */}
      <header className="sticky top-0 z-10 bg-white border-b border-pink-200">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Logo 
              height={40} 
              width={180} 
              className="flex-shrink-0 md:w-48 md:h-14 w-36 h-8 leading-none" 
            />
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-pink-950 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-pink-600 font-medium">
              Blogs
            </Link>
            <Link href="/chat" className="text-pink-950 hover:text-pink-600 transition-colors">
              Chat
            </Link>
            <Link href="/risk-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Risk Assessment
            </Link>
            <Link href="/scan-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Scan Assessment
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="text-pink-950">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-white border-b border-pink-100">
        <div className="container px-4 mx-auto py-8">
          <h1 className="text-4xl font-bold text-pink-900 text-center mb-4">Insights & Blogs</h1>
          <p className="text-lg text-pink-700 text-center max-w-3xl mx-auto">
            Real stories from real people. Discover strength, hope, and resilience through the journeys of breast cancer survivors, advocates, and medical professionals.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <Card
              key={blog.id}
              className="border-pink-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => handleBlogClick(blog)}
            >
              <div className="relative">
                <img
                  src={`/assets/Blog images/Image${index + 1}.jpg`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center text-xs text-pink-600 mb-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{blog.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-pink-900 line-clamp-2 group-hover:text-pink-700 transition-colors">
                  {blog.title}
                </h4>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-pink-700 mb-4 line-clamp-3">
                  {blog.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-pink-600">{blog.author}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-pink-600 text-lg">No blogs found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-pink-900">{selectedBlog.title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedBlog(null)}
                  className="text-pink-600 hover:text-pink-700"
                >
                  ✕
                </Button>
              </div>
              <div className="flex items-center text-sm text-pink-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{selectedBlog.date}</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>{selectedBlog.author}</span>
              </div>
              <div className="prose prose-pink max-w-none">
                <div className="text-pink-700 leading-relaxed whitespace-pre-line">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 