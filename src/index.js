const express = require('express')
const router = express.Router()
const app = express()


//create a server object:
app.get('/', (req, res, next) => {
  const movies = [{
    "id": "35f9b99c-5efc-4412-b476-b82552fda972",
    "name": "Varg Veum - Fallen Angels (Varg Veum - Falne Engler)",
    "description": "Postproc hematoma and seroma of ear/mastd fol a procedure",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "a6480a45-8d8e-4b76-b348-011607854da1",
    "name": "Silences of the Palace, The (Saimt el Qusur)",
    "description": "Unsp injury at T7-T10 level of thoracic spinal cord, init",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "2c55856e-8649-41e6-bee5-1f4b88dbf45a",
    "name": "Lone Wolf McQuade",
    "description": "Fx unsp phalanx of r little finger, subs for fx w routn heal",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "23e92acb-bdfc-4867-999d-a58f01deccfa",
    "name": "Kill by Inches",
    "description": "Bucket-hndl tear of lat mensc, crnt injury, unsp knee, sqla",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "820b5a18-4484-4ed3-91c2-c8a8317f8e78",
    "name": "Muppet Family Christmas, A",
    "description": "Lacerat intrinsic musc/fasc/tend l mid finger at wrs/hnd lv",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "ca14a2ce-2926-4b5c-898e-976053872f7d",
    "name": "Odgrobadogroba",
    "description": "Pathological fracture, left radius, subs for fx w routn heal",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "0eb3dd35-48bb-4371-89f5-543ec9bfcfd3",
    "name": "I.O.U.S.A. (a.k.a. IOUSA)",
    "description": "X-linked ocular albinism",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "c2170168-6186-46d6-a936-87159159644b",
    "name": "Sugar Cane Alley (Rue cases nègres)",
    "description": "Oth postproc complications and disorders of resp sys, NEC",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "deacc8dd-c755-466c-a595-56900fe152fa",
    "name": "Bride Wore Black, The (La mariée était en noir)",
    "description": "Biotin-dependent carboxylase deficiency",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "c77d5d8a-81f2-4c5c-b6e5-11ccb3b4005b",
    "name": "Lilies of the Field",
    "description": "Driver of bus inj in clsn w rail trn/veh in traf, sequela",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "86b12118-e2ab-42b9-82b8-c545732d0404",
    "name": "Precious",
    "description": "Centrally-acting and adrenergic-neuron- blocking agents",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "3fbddf2b-4cb0-4cbe-a8ac-b8e049aa6a34",
    "name": "Finding Forrester",
    "description": "Other sprain of right elbow, subsequent encounter",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "a6dfdca0-0868-49c9-ac84-44b681c90560",
    "name": "Center Stage (Ruan Lingyu) (Actress, The) (New China Woman, The)",
    "description": "Loose body in wrist",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "73568f03-2ee8-4e66-ba17-797f09d51854",
    "name": "'Hellboy': The Seeds of Creation",
    "description": "Primary hypersomnia",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "f7359131-bd64-4f9c-9b12-cbe3dbabe61e",
    "name": "Nativity!",
    "description": "Unsp injury of unsp musc/fasc/tend at thi lev, left thigh",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "d3e93bcc-787c-41e8-b5e6-c3bc246669a7",
    "name": "A Justified Life: Sam Peckinpah and the High Country",
    "description": "Burn unsp degree of single l finger except thumb, sqla",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "e38eed5e-3e50-4ea0-a240-b9b0f01c170d",
    "name": "Rabbit",
    "description": "Oth fx upr & low end unsp fibula, 7thF",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "95a8fd06-9e02-4b66-b3f5-1bd009a3b65d",
    "name": "Suck",
    "description": "Prsn brd/alit from bus injured in clsn w 2/3-whl mv, subs",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "a5881414-f66c-47cf-ac13-4124e78c93ee",
    "name": "Fox and His Friends (Faustrecht der Freiheit)",
    "description": "Unsp injury of unsp musc/fasc/tend at forearm level",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "8e6dba99-15d9-4424-8af7-01a6ecc40a62",
    "name": "Malèna",
    "description": "Underdosing of thrombolytic drugs, initial encounter",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "4ad14085-8731-43bf-8018-d14b718f4b64",
    "name": "Looking for Hortense (Cherchez Hortense) ",
    "description": "Fall into other water striking wall causing other injury",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "a90802c8-a803-41a6-918f-414181d195d6",
    "name": "Ronin",
    "description": "Glucocorticoid-remediable aldosteronism",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "e5809fdb-ceb2-4650-9594-1186d57ab59f",
    "name": "Buried Alive II",
    "description": "Laceration w/o fb of pharynx and cervical esophagus, init",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "ae8af9bc-4bbf-46fb-9968-28319384fa7f",
    "name": "Associate, The",
    "description": "Other disorders of amino-acid transport",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "5666710f-4c9d-4dc0-a40e-31388d9c728d",
    "name": "Transsiberian",
    "description": "Cervical root disorders, not elsewhere classified",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "ab37a2cd-4bb2-4670-96ad-1a022e73a75b",
    "name": "High Roller: The Stu Ungar Story",
    "description": "Other fracture of occiput, unspecified side, init",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "01e2806e-11de-4a11-96e5-8e1cdc828efc",
    "name": "Jim Thorpe -- All-American",
    "description": "Major laceration of left internal jugular vein, init encntr",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "58fef2ce-e94e-4437-b771-b0bcc6e806bf",
    "name": "800 Bullets (800 Balas)",
    "description": "Lacerat extn musc/fasc/tend at forarm lv, unsp arm, subs",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "e00a18b9-ad05-44d6-b3da-e8a28b925dbe",
    "name": "Defying Gravity",
    "description": "Traum subrac hem w loss of consciousness of unsp duration",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "d4cc63b8-cf88-48a1-b272-d96ac83f9f77",
    "name": "Garfield: A Tail of Two Kitties",
    "description": "Other acquired deformities of foot",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "aa9f3ba3-caf3-4462-86be-accd3b0eb8ff",
    "name": "Ajami",
    "description": "Pressure ulcer of right hip, stage 1",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "6cbd8a67-2680-4811-bc92-7c6a05678ef3",
    "name": "Silk Stockings",
    "description": "Lateral dislocation of unspecified patella, subs encntr",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "0ec219d4-b8f9-4261-ab33-7b9bfe13292d",
    "name": "Magdalene Sisters, The",
    "description": "Toxic effect of ketones, undetermined",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "4e5ef184-2f5f-49b9-bc51-a8eb5866ded0",
    "name": "Center Stage (Ruan Lingyu) (Actress, The) (New China Woman, The)",
    "description": "Open bite of unspecified upper arm",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "d452ce1b-fc61-4e28-975f-cd7941fb8b4c",
    "name": "Snow Queen, The (Lumikuningatar)",
    "description": "Abnormal cytologic smear of anus",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "bc6c07ef-513a-4c02-9b00-9937491744fc",
    "name": "Zebra Lounge",
    "description": "Intcran inj w LOC of 30 minutes or less, subs",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "9b8fafd7-e9ad-455c-8bc0-f4f6db2437a3",
    "name": "Glory to the Filmmaker! (Kantoku · Banzai!)",
    "description": "Contracture of muscle, unspecified hand",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "544466aa-6fbd-4e96-a0d4-c88ec3b22f1e",
    "name": "Looking for Palladin",
    "description": "Phlegmonous dacryocystitis of bilateral lacrimal passages",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }, {
    "id": "98ff1021-f72a-47c0-a1db-79f9a7fd9221",
    "name": "Chill",
    "description": "Other stimulant abuse, uncomplicated",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "6717645b-c037-41e7-812a-d86ed00bd3ac",
    "name": "We're Not Dressing",
    "description": "Traum rupture of palmar ligmt of l mid finger at MCP/IP jt",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "9997653d-4b46-4d83-b1e2-535f3b514bcc",
    "name": "Hit by Lightning",
    "description": "Vitreous prolapse, right eye",
    "image": "http://dummyimage.com/250x300.jpg/5fa2dd/ffffff"
  }, {
    "id": "92b5ee31-6e91-41cf-b3a7-483740cb3782",
    "name": "Black Dynamite",
    "description": "Sltr-haris Type II physl fx lower end ulna, unsp arm, init",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "c6d2e646-5859-4046-811f-a0dca153a345",
    "name": "Asier ETA biok",
    "description": "Type I occipital condyle fracture, unspecified side, 7thK",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "de98a864-cf3a-4213-b825-81fa3814e658",
    "name": "La Morte Rouge",
    "description": "Fracture of unspecified metatarsal bone(s)",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "978e6893-a5ef-4f02-bd08-bc366afdda94",
    "name": "Two Crimes (Dos crímenes)",
    "description": "Other injury due to other accident on board fishing boat",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "0ba9a9b1-c147-427e-936d-cce87fcd16b5",
    "name": "Tokyo Sonata",
    "description": "Poisoning by opth drugs and preparations, undetermined, init",
    "image": "http://dummyimage.com/250x300.jpg/ff4444/ffffff"
  }, {
    "id": "d5c3ec0c-f650-44c1-aa9c-9c866d7b6645",
    "name": "Devil Bat, The",
    "description": "Puncture wound with foreign body of trachea",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "9b6dce10-7f73-4e1d-b77e-0b55333c8e55",
    "name": "Lt. Robin Crusoe, U.S.N.",
    "description": "Poisoning by hydantoin derivatives, assault, subs encntr",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "4bef4a10-f0df-4b02-b247-2d718ec5b92c",
    "name": "Crow: City of Angels, The",
    "description": "Toxic effect of inorganic substances, self-harm, sequela",
    "image": "http://dummyimage.com/250x300.jpg/cc0000/ffffff"
  }, {
    "id": "48d61fed-10fa-4933-88d2-25e65a1e6561",
    "name": "Honeymoons",
    "description": "Renal failure following incomplete spontaneous abortion",
    "image": "http://dummyimage.com/250x300.jpg/dddddd/000000"
  }]
    res.json(movies); //write a response to the client
  })

  const port = 5000

  app.listen(port, ()=>console.log('listening'))