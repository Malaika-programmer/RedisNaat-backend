import { createClient } from "redis"; // require ki jagah import use karein

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

async function seedData() {
  await client.connect();

  const naatData = [
    // --- TOP PICKS & POPULAR ---
    {
      id: "1",
      title: "Mustafa Jaan-e-Rehmat",
      artist: "Atif Aslam",
      duration: "10:15",
      type: "Salam",
      image:
        "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=500",
      videoUrl: "https://www.youtube.com/watch?v=U8id_H_UvB0",
    },
    {
      id: "2",
      title: "Tajdar-e-Haram",
      artist: "Amjad Sabri",
      duration: "10:28",
      type: "Qawwali",
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=500",
      videoUrl: "https://www.youtube.com/watch?v=a18py61_F_w",
    },
    {
      id: "3",
      title: "Faslon Ko Takalluf",
      artist: "Qari Waheed Zafar",
      duration: "05:45",
      type: "Naat",
      image:
        "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=500",
      videoUrl: "https://www.youtube.com/watch?v=2I8v6E_G68Y",
    },
    {
      id: "4",
      title: "Wohi Khuda Hai",
      artist: "Atif Aslam",
      duration: "08:12",
      type: "Hamd",
      image:
        "https://images.unsplash.com/photo-1507537362147-980d20d51eca?q=80&w=500",
      videoUrl: "https://www.youtube.com/watch?v=fS9uY03vL60",
    },
    {
      id: "5",
      title: "Main To Panjetan Ka Ghulam",
      artist: "Farhan Ali Qadri",
      duration: "06:30",
      type: "Manqabat",
      image:
        "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=500",
      videoUrl: "https://www.youtube.com/watch?v=5rG6Y-NUp6I",
    },

    // --- OWAIS RAZA QADRI SPECIAL ---
    {
      id: "6",
      title: "Madine Ka Safar",
      artist: "Owais Raza Qadri",
      duration: "12:20",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=vVj4u_3P4kI",
    },
    {
      id: "7",
      title: "Balaghal Ula Bi Kamalihi",
      artist: "Owais Raza Qadri",
      duration: "07:15",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/15344134/pexels-photo-15344134.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=k_X8Hbe00_M",
    },
    {
      id: "8",
      title: "Main Madine Chala",
      artist: "Owais Raza Qadri",
      duration: "08:40",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164567/pexels-photo-8164567.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=nO2_7tWjD1c",
    },
    {
      id: "9",
      title: "Ya Nabi Salam Alayka",
      artist: "Owais Raza Qadri",
      duration: "06:10",
      type: "Salam",
      image:
        "https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=5W_mHqL7GIA",
    },
    {
      id: "10",
      title: "Aqa Ka Milad Aaya",
      artist: "Owais Raza Qadri",
      duration: "09:30",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/4344441/pexels-photo-4344441.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=CqYyCEnl3zM",
    },

    // --- JUNAID JAMSHED SPECIAL ---
    {
      id: "11",
      title: "Mera Dil Badal De",
      artist: "Junaid Jamshed",
      duration: "05:20",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164381/pexels-photo-8164381.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=P2L-f-9I0L0",
    },
    {
      id: "12",
      title: "Ilahi Teri Chaukhat Per",
      artist: "Junaid Jamshed",
      duration: "04:50",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164382/pexels-photo-8164382.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=v28S1f_8x5U",
    },
    {
      id: "13",
      title: "Muhammad Ka Roza",
      artist: "Junaid Jamshed",
      duration: "06:15",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=uK1Xm6u5X_g",
    },
    {
      id: "14",
      title: "Faaslon Ko Takalluf",
      artist: "Junaid Jamshed",
      duration: "05:55",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/3621217/pexels-photo-3621217.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=LqO6mE1j8o0",
    },
    {
      id: "15",
      title: "Duniya Ke Ae Musafir",
      artist: "Junaid Jamshed",
      duration: "06:40",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=kY6E73D30o4",
    },

    // --- SYED FASSIHUDIN & OTHERS ---
    {
      id: "16",
      title: "Khula Hai Sabhi Ke Liye",
      artist: "S. Fasihuddin Soharwardi",
      duration: "07:10",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/3611132/pexels-photo-3611132.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=F3_6A8Q9r8k",
    },
    {
      id: "17",
      title: "Main Behka Behka",
      artist: "S. Fasihuddin Soharwardi",
      duration: "06:30",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=yP5_0YhR0S4",
    },
    {
      id: "18",
      title: "Huzoor Aisa Koi Intizam",
      artist: "S. Fasihuddin Soharwardi",
      duration: "08:15",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/337904/pexels-photo-337904.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=XWv_gNqXn30",
    },
    {
      id: "19",
      title: "Zameen-o-Zaman",
      artist: "S. Fasihuddin Soharwardi",
      duration: "05:50",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=f25C96f5mCg",
    },
    {
      id: "20",
      title: "An Nabi Sallu Alaih",
      artist: "Milad Raza Qadri",
      duration: "05:10",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/3672288/pexels-photo-3672288.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=FjI_9fO926s",
    },

    // --- MANQABAT & QAWWALI ---
    {
      id: "21",
      title: "Man Kunto Maula",
      artist: "Abida Parveen",
      duration: "09:20",
      type: "Manqabat",
      image:
        "https://images.pexels.com/photos/2043324/pexels-photo-2043324.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=5r_G9S8T9wU",
    },
    {
      id: "22",
      title: "Ali Maula Ali Maula",
      artist: "Nusrat Fateh Ali Khan",
      duration: "15:30",
      type: "Qawwali",
      image:
        "https://images.pexels.com/photos/4344439/pexels-photo-4344439.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=U6_Lz0p6YpM",
    },
    {
      id: "23",
      title: "Allah Hoo Allah Hoo",
      artist: "Nusrat Fateh Ali Khan",
      duration: "10:45",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/4344440/pexels-photo-4344440.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=H7B8n2Yv9Wk",
    },
    {
      id: "24",
      title: "Bhar Do Jholi",
      artist: "Adnan Sami",
      duration: "08:20",
      type: "Qawwali",
      image:
        "https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=0_u6uB2wX8o",
    },
    {
      id: "25",
      title: "Dam Mast Qalandar",
      artist: "Amjad Sabri",
      duration: "07:50",
      type: "Qawwali",
      image:
        "https://images.pexels.com/photos/15344131/pexels-photo-15344131.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=3S5eXyV7M4k",
    },

    // --- ARABIC / INTERNATIONAL MIX ---
    {
      id: "26",
      title: "Ya Nabi Salam Alayka",
      artist: "Maher Zain",
      duration: "04:55",
      type: "Salam",
      image:
        "https://images.pexels.com/photos/8164390/pexels-photo-8164390.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=Vqfy4ScRXFQ",
    },
    {
      id: "27",
      title: "Assalamu Alayka",
      artist: "Maher Zain",
      duration: "04:15",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164383/pexels-photo-8164383.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=h_7e7YvW8mI",
    },
    {
      id: "28",
      title: "Mawlaya Salli",
      artist: "Maher Zain",
      duration: "05:30",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164388/pexels-photo-8164388.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=K3fE_756NfU",
    },
    {
      id: "29",
      title: "Hasbi Rabbi",
      artist: "Sami Yusuf",
      duration: "04:40",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164385/pexels-photo-8164385.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=uK1Xm6u5X_g",
    },
    {
      id: "30",
      title: "The Supplication",
      artist: "Sami Yusuf",
      duration: "05:10",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/337902/pexels-photo-337902.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=fS9uY03vL60",
    },

    // --- MORE RECITATIONS ---
    {
      id: "31",
      title: "Aae Rasool-e-Amin",
      artist: "Sarwar Hussain",
      duration: "06:20",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/4344445/pexels-photo-4344445.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=nO2_7tWjD1c",
    },
    {
      id: "32",
      title: "Nouri Mukhra",
      artist: "Farhan Ali Qadri",
      duration: "05:50",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/4344446/pexels-photo-4344446.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=5rG6Y-NUp6I",
    },
    {
      id: "33",
      title: "Mere Maula Karam Ho",
      artist: "Shahbaz Qamar",
      duration: "07:15",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164387/pexels-photo-8164387.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=vVj4u_3P4kI",
    },
    {
      id: "34",
      title: "Karamaat-e-Sahaba",
      artist: "Hafiz Tahir Qadri",
      duration: "08:40",
      type: "Manqabat",
      image:
        "https://images.pexels.com/photos/8164386/pexels-photo-8164386.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=CqYyCEnl3zM",
    },
    {
      id: "35",
      title: "Labbaik Ya Rasool Allah",
      artist: "Hafiz Tahir Qadri",
      duration: "06:10",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164391/pexels-photo-8164391.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=FjI_9fO926s",
    },
    {
      id: "36",
      title: "Teri Rehmaton Ka Dariya",
      artist: "Zulfiqar Ali",
      duration: "07:30",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164392/pexels-photo-8164392.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=H7B8n2Yv9Wk",
    },
    {
      id: "37",
      title: "Ya Sayyidi Ya Rasool Allah",
      artist: "Siddiq Ismail",
      duration: "05:25",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164393/pexels-photo-8164393.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=yP5_0YhR0S4",
    },
    {
      id: "38",
      title: "Chamkaane Wali",
      artist: "Hafiz Ahmed Raza Qadri",
      duration: "06:50",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164394/pexels-photo-8164394.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=XWv_gNqXn30",
    },
    {
      id: "39",
      title: "Saba Madine",
      artist: "Khurshid Ahmad",
      duration: "05:40",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164395/pexels-photo-8164395.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=f25C96f5mCg",
    },
    {
      id: "40",
      title: "Har Waqt Tasawwur",
      artist: "Syed Fasihuddin",
      duration: "07:05",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164396/pexels-photo-8164396.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=F3_6A8Q9r8k",
    },
    {
      id: "41",
      title: "Main To Khud Unke",
      artist: "Waheed Zafar",
      duration: "06:15",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164397/pexels-photo-8164397.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=2I8v6E_G68Y",
    },
    {
      id: "42",
      title: "Maula Ya Salli",
      artist: "Various Artists",
      duration: "05:00",
      type: "Salam",
      image:
        "https://images.pexels.com/photos/8164398/pexels-photo-8164398.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=K3fE_756NfU",
    },
    {
      id: "43",
      title: "Madine Diyan Pak Galiyan",
      artist: "Mushtaq Qadri",
      duration: "08:10",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164399/pexels-photo-8164399.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=nO2_7tWjD1c",
    },
    {
      id: "44",
      title: "Subhan Allah",
      artist: "Junaid Jamshed",
      duration: "04:55",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164400/pexels-photo-8164400.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=P2L-f-9I0L0",
    },
    {
      id: "45",
      title: "Zikre Ahmed Se",
      artist: "Owais Qadri",
      duration: "07:35",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164401/pexels-photo-8164401.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=k_X8Hbe00_M",
    },
    {
      id: "46",
      title: "Ali Haider Ka Gharana",
      artist: "Farhan Ali Qadri",
      duration: "06:20",
      type: "Manqabat",
      image:
        "https://images.pexels.com/photos/8164402/pexels-photo-8164402.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=5rG6Y-NUp6I",
    },
    {
      id: "47",
      title: "Kaabe Ki Raunaq",
      artist: "Sabri Brothers",
      duration: "12:00",
      type: "Qawwali",
      image:
        "https://images.pexels.com/photos/8164403/pexels-photo-8164403.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=a18py61_F_w",
    },
    {
      id: "48",
      title: "Pukaaro Ya Nabi",
      artist: "Milad Raza Qadri",
      duration: "05:45",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164404/pexels-photo-8164404.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=FjI_9fO926s",
    },
    {
      id: "49",
      title: "Kab Gunaho Se",
      artist: "Junaid Jamshed",
      duration: "06:05",
      type: "Hamd",
      image:
        "https://images.pexels.com/photos/8164405/pexels-photo-8164405.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=kY6E73D30o4",
    },
    {
      id: "50",
      title: "Dar-e-Nabi Per",
      artist: "Shahbaz Qamar",
      duration: "07:50",
      type: "Naat",
      image:
        "https://images.pexels.com/photos/8164406/pexels-photo-8164406.jpeg?auto=compress&cs=tinysrgb&w=500",
      videoUrl: "https://www.youtube.com/watch?v=vVj4u_3P4kI",
    },
  ];

  for (let naat of naatData) {
    await client.set(`naat:${naat.id}`, JSON.stringify(naat));
  }

  console.log("✅ Data Seeded Successfully!");
  await client.disconnect();
}

seedData();
