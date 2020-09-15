const YOUTUBE_REGEXP = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/gim;
const IMAGE_REGEXP = /http(?:s?):\/\/(.*)(gif|jpe?g|bmp|png)$/gim;
const YOUTUBE_REGEXP_ID = /(=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/gim;
const DATE_TIME = /[A-z]+\s[A-z]+\s[0-9]+\s[0-9]+\s([0-9]+:[0-9]+:[0-9]+)/gim;
const EMOJI_REGEXP = /:[A-z0-9]+:/gim;

let form = document.getElementById("form");
let name = document.getElementById("nick");
let msg = document.getElementById("message");
let send = document.getElementById("send");
let emojiList = document.getElementById("emojiList");

let emoji = {
  "100": "graphics/emojis/100.png ",
  "1234": "graphics/emojis/1234.png",
  bowtie: "graphics/emojis/bowtie.png",
  smile: "graphics/emojis/smile.png",
  simple_smile: "graphics/emojis/simple_smile.png",
  laughing: "graphics/emojis/laughing.png",
  blush: "graphics/emojis/blush.png",
  smiley: "graphics/emojis/smiley.png",
  relaxed: "graphics/emojis/relaxed.png",
  smirk: "graphics/emojis/smirk.png",
  heart_eyes: "graphics/emojis/heart_eyes.png",
  kissing_heart: "graphics/emojis/kissing_heart.png",
  kissing_closed_eyes: "graphics/emojis/kissing_closed_eyes.png",
  flushed: "graphics/emojis/flushed.png",
  relieved: "graphics/emojis/relieved.png",
  satisfied: "graphics/emojis/satisfied.png",
  grin: "graphics/emojis/grin.png",
  wink: "graphics/emojis/wink.png",
  stuck_out_tongue_winking_eye: "graphics/emojis/stuck_out_tongue_winking_eye.png",
  stuck_out_tongue_closed_eyes: "graphics/emojis/stuck_out_tongue_closed_eyes.png",
  grinning: "graphics/emojis/grinning.png",
  kissing: "graphics/emojis/kissing.png",
  kissing_smiling_eyes: "graphics/emojis/kissing_smiling_eyes.png",
  stuck_out_tongue: "graphics/emojis/stuck_out_tongue.png",
  sleeping: "graphics/emojis/sleeping.png",
  worried: "graphics/emojis/worried.png",
  frowning: "graphics/emojis/frowning.png",
  anguished: "graphics/emojis/anguished.png",
  open_mouth: "graphics/emojis/open_mouth.png",
  grimacing: "graphics/emojis/grimacing.png",
  confused: "graphics/emojis/confused.png",
  hushed: "graphics/emojis/hushed.png",
  expressionless: "graphics/emojis/expressionless.png",
  unamused: "graphics/emojis/unamused.png",
  sweat_smile: "graphics/emojis/sweat_smile.png",
  sweat: "graphics/emojis/sweat.png",
  disappointed_relieved: "graphics/emojis/disappointed_relieved.png",
  weary: "graphics/emojis/weary.png",
  pensive: "graphics/emojis/pensive.png",
  disappointed: "graphics/emojis/disappointed.png",
  confounded: "graphics/emojis/confounded.png",
  fearful: "graphics/emojis/fearful.png",
  cold_sweat: "graphics/emojis/cold_sweat.png",
  persevere: "graphics/emojis/persevere.png",
  cry: "graphics/emojis/cry.png",
  sob: "graphics/emojis/sob.png",
  joy: "graphics/emojis/joy.png",
  astonished: "graphics/emojis/astonished.png",
  scream: "graphics/emojis/scream.png",
  neckbeard: "graphics/emojis/neckbeard.png",
  tired_face: "graphics/emojis/tired_face.png",
  angry: "graphics/emojis/angry.png",
  rage: "graphics/emojis/rage.png",
  triumph: "graphics/emojis/triumph.png",
  sleepy: "graphics/emojis/sleepy.png",
  yum: "graphics/emojis/yum.png",
  mask: "graphics/emojis/mask.png",
  sunglasses: "graphics/emojis/sunglasses.png",
  dizzy_face: "graphics/emojis/dizzy_face.png",
  imp: "graphics/emojis/imp.png",
  smiling_imp: "graphics/emojis/smiling_imp.png",
  neutral_face: "graphics/emojis/neutral_face.png",
  no_mouth: "graphics/emojis/no_mouth.png",
  innocent: "graphics/emojis/innocent.png",
  alien: "graphics/emojis/alien.png",
  yellow_heart: "graphics/emojis/yellow_heart.png",
  blue_heart: "graphics/emojis/blue_heart.png",
  purple_heart: "graphics/emojis/purple_heart.png",
  heart: "graphics/emojis/heart.png",
  green_heart: "graphics/emojis/green_heart.png",
  broken_heart: "graphics/emojis/broken_heart.png",
  heartbeat: "graphics/emojis/heartbeat.png",
  heartpulse: "graphics/emojis/heartpulse.png",
  two_hearts: "graphics/emojis/two_hearts.png",
  revolving_hearts: "graphics/emojis/revolving_hearts.png",
  cupid: "graphics/emojis/cupid.png",
  sparkling_heart: "graphics/emojis/sparkling_heart.png",
  sparkles: "graphics/emojis/sparkles.png",
  star: "graphics/emojis/star.png",
  star2: "graphics/emojis/star2.png",
  dizzy: "graphics/emojis/dizzy.png",
  boom: "graphics/emojis/boom.png",
  collision: "graphics/emojis/collision.png",
  anger: "graphics/emojis/anger.png",
  exclamation: "graphics/emojis/exclamation.png",
  question: "graphics/emojis/question.png",
  grey_exclamation: "graphics/emojis/grey_exclamation.png",
  grey_question: "graphics/emojis/grey_question.png",
  zzz: "graphics/emojis/zzz.png",
  dash: "graphics/emojis/dash.png",
  sweat_drops: "graphics/emojis/sweat_drops.png",
  notes: "graphics/emojis/notes.png",
  musical_note: "graphics/emojis/musical_note.png",
  fire: "graphics/emojis/fire.png",
  hankey: "graphics/emojis/hankey.png",
  poop: "graphics/emojis/poop.png",
  shit: "graphics/emojis/shit.png",
  "+1": "graphics/emojis/plus1.png",
  thumbsup: "graphics/emojis/thumbsup.png",
  "-1": "graphics/emojis/-1.png",
  thumbsdown: "graphics/emojis/thumbsdown.png",
  ok_hand: "graphics/emojis/ok_hand.png",
  punch: "graphics/emojis/punch.png",
  facepunch: "graphics/emojis/facepunch.png",
  fist: "graphics/emojis/fist.png",
  v: "graphics/emojis/v.png",
  wave: "graphics/emojis/wave.png",
  hand: "graphics/emojis/hand.png",
  raised_hand: "graphics/emojis/raised_hand.png",
  open_hands: "graphics/emojis/open_hands.png",
  point_up: "graphics/emojis/point_up.png",
  point_down: "graphics/emojis/point_down.png",
  point_left: "graphics/emojis/point_left.png",
  point_right: "graphics/emojis/point_right.png",
  raised_hands: "graphics/emojis/raised_hands.png",
  pray: "graphics/emojis/pray.png",
  point_up_2: "graphics/emojis/point_up_2.png",
  clap: "graphics/emojis/clap.png",
  muscle: "graphics/emojis/muscle.png",
  metal: "graphics/emojis/metal.png",
  fu: "graphics/emojis/fu.png",
  runner: "graphics/emojis/runner.png",
  running: "graphics/emojis/running.png",
  couple: "graphics/emojis/couple.png",
  family: "graphics/emojis/family.png",
  two_men_holding_hands: "graphics/emojis/two_men_holding_hands.png",
  two_women_holding_hands: "graphics/emojis/two_women_holding_hands.png",
  dancer: "graphics/emojis/dancer.png",
  dancers: "graphics/emojis/dancers.png",
  ok_woman: "graphics/emojis/ok_woman.png",
  no_good: "graphics/emojis/no_good.png",
  information_desk_person: "graphics/emojis/information_desk_person.png",
  raising_hand: "graphics/emojis/raising_hand.png",
  bride_with_veil: "graphics/emojis/bride_with_veil.png",
  person_with_pouting_face: "graphics/emojis/person_with_pouting_face.png",
  person_frowning: "graphics/emojis/person_frowning.png",
  bow: "graphics/emojis/bow.png",
  couplekiss: "graphics/emojis/couplekiss.png",
  couple_with_heart: "graphics/emojis/couple_with_heart.png",
  massage: "graphics/emojis/massage.png",
  haircut: "graphics/emojis/haircut.png",
  nail_care: "graphics/emojis/nail_care.png",
  boy: "graphics/emojis/boy.png",
  girl: "graphics/emojis/girl.png",
  woman: "graphics/emojis/woman.png",
  man: "graphics/emojis/man.png",
  baby: "graphics/emojis/baby.png",
  older_woman: "graphics/emojis/older_woman.png",
  older_man: "graphics/emojis/older_man.png",
  person_with_blond_hair: "graphics/emojis/person_with_blond_hair.png",
  man_with_gua_pi_mao: "graphics/emojis/man_with_gua_pi_mao.png",
  man_with_turban: "graphics/emojis/man_with_turban.png",
  construction_worker: "graphics/emojis/construction_worker.png",
  cop: "graphics/emojis/cop.png",
  angel: "graphics/emojis/angel.png",
  princess: "graphics/emojis/princess.png",
  smiley_cat: "graphics/emojis/smiley_cat.png",
  smile_cat: "graphics/emojis/smile_cat.png",
  heart_eyes_cat: "graphics/emojis/heart_eyes_cat.png",
  kissing_cat: "graphics/emojis/kissing_cat.png",
  smirk_cat: "graphics/emojis/smirk_cat.png",
  scream_cat: "graphics/emojis/scream_cat.png",
  crying_cat_face: "graphics/emojis/crying_cat_face.png",
  joy_cat: "graphics/emojis/joy_cat.png",
  pouting_cat: "graphics/emojis/pouting_cat.png",
  japanese_ogre: "graphics/emojis/japanese_ogre.png",
  japanese_goblin: "graphics/emojis/japanese_goblin.png",
  see_no_evil: "graphics/emojis/see_no_evil.png",
  hear_no_evil: "graphics/emojis/hear_no_evil.png",
  speak_no_evil: "graphics/emojis/speak_no_evil.png",
  guardsman: "graphics/emojis/guardsman.png",
  skull: "graphics/emojis/skull.png",
  feet: "graphics/emojis/feet.png",
  lips: "graphics/emojis/lips.png",
  kiss: "graphics/emojis/kiss.png",
  droplet: "graphics/emojis/droplet.png",
  ear: "graphics/emojis/ear.png",
  eyes: "graphics/emojis/eyes.png",
  nose: "graphics/emojis/nose.png",
  tongue: "graphics/emojis/tongue.png",
  love_letter: "graphics/emojis/love_letter.png",
  bust_in_silhouette: "graphics/emojis/bust_in_silhouette.png",
  busts_in_silhouette: "graphics/emojis/busts_in_silhouette.png",
  speech_balloon: "graphics/emojis/speech_balloon.png",
  thought_balloon: "graphics/emojis/thought_balloon.png",
  feelsgood: "graphics/emojis/feelsgood.png",
  finnadie: "graphics/emojis/finnadie.png",
  goberserk: "graphics/emojis/goberserk.png",
  godmode: "graphics/emojis/godmode.png",
  hurtrealbad: "graphics/emojis/hurtrealbad.png",
  rage1: "graphics/emojis/rage1.png",
  rage2: "graphics/emojis/rage2.png",
  rage3: "graphics/emojis/rage3.png",
  rage4: "graphics/emojis/rage4.png",
  suspect: "graphics/emojis/suspect.png",
  trollface: "graphics/emojis/trollface.png",
  sunny: "graphics/emojis/sunny.png",
  umbrella: "graphics/emojis/umbrella.png",
  cloud: "graphics/emojis/cloud.png",
  snowflake: "graphics/emojis/snowflake.png",
  snowman: "graphics/emojis/snowman.png",
  zap: "graphics/emojis/zap.png",
  cyclone: "graphics/emojis/cyclone.png",
  foggy: "graphics/emojis/foggy.png",
  ocean: "graphics/emojis/ocean.png",
  cat: "graphics/emojis/cat.png",
  dog: "graphics/emojis/dog.png",
  mouse: "graphics/emojis/mouse.png",
  hamster: "graphics/emojis/hamster.png",
  rabbit: "graphics/emojis/rabbit.png",
  wolf: "graphics/emojis/wolf.png",
  frog: "graphics/emojis/frog.png",
  tiger: "graphics/emojis/tiger.png",
  koala: "graphics/emojis/koala.png",
  bear: "graphics/emojis/bear.png",
  pig: "graphics/emojis/pig.png",
  pig_nose: "graphics/emojis/pig_nose.png",
  cow: "graphics/emojis/cow.png",
  boar: "graphics/emojis/boar.png",
  monkey_face: "graphics/emojis/monkey_face.png",
  monkey: "graphics/emojis/monkey.png",
  horse: "graphics/emojis/horse.png",
  racehorse: "graphics/emojis/racehorse.png",
  camel: "graphics/emojis/camel.png",
  sheep: "graphics/emojis/sheep.png",
  elephant: "graphics/emojis/elephant.png",
  panda_face: "graphics/emojis/panda_face.png",
  snake: "graphics/emojis/snake.png",
  bird: "graphics/emojis/bird.png",
  baby_chick: "graphics/emojis/baby_chick.png",
  hatched_chick: "graphics/emojis/hatched_chick.png",
  hatching_chick: "graphics/emojis/hatching_chick.png",
  chicken: "graphics/emojis/chicken.png",
  penguin: "graphics/emojis/penguin.png",
  turtle: "graphics/emojis/turtle.png",
  bug: "graphics/emojis/bug.png",
  honeybee: "graphics/emojis/honeybee.png",
  ant: "graphics/emojis/ant.png",
  beetle: "graphics/emojis/beetle.png",
  snail: "graphics/emojis/snail.png",
  octopus: "graphics/emojis/octopus.png",
  tropical_fish: "graphics/emojis/tropical_fish.png",
  fish: "graphics/emojis/fish.png",
  whale: "graphics/emojis/whale.png",
  whale2: "graphics/emojis/whale2.png",
  dolphin: "graphics/emojis/dolphin.png",
  cow2: "graphics/emojis/cow2.png",
  ram: "graphics/emojis/ram.png",
  rat: "graphics/emojis/rat.png",
  water_buffalo: "graphics/emojis/water_buffalo.png",
  tiger2: "graphics/emojis/tiger2.png",
  rabbit2: "graphics/emojis/rabbit2.png",
  dragon: "graphics/emojis/dragon.png",
  goat: "graphics/emojis/goat.png",
  rooster: "graphics/emojis/rooster.png",
  dog2: "graphics/emojis/dog2.png",
  pig2: "graphics/emojis/pig2.png",
  mouse2: "graphics/emojis/mouse2.png",
  ox: "graphics/emojis/ox.png",
  dragon_face: "graphics/emojis/dragon_face.png",
  blowfish: "graphics/emojis/blowfish.png",
  crocodile: "graphics/emojis/crocodile.png",
  dromedary_camel: "graphics/emojis/dromedary_camel.png",
  leopard: "graphics/emojis/leopard.png",
  cat2: "graphics/emojis/cat2.png",
  poodle: "graphics/emojis/poodle.png",
  paw_prints: "graphics/emojis/paw_prints.png",
  bouquet: "graphics/emojis/bouquet.png",
  cherry_blossom: "graphics/emojis/cherry_blossom.png",
  tulip: "graphics/emojis/tulip.png",
  four_leaf_clover: "graphics/emojis/four_leaf_clover.png",
  rose: "graphics/emojis/rose.png",
  sunflower: "graphics/emojis/sunflower.png",
  hibiscus: "graphics/emojis/hibiscus.png",
  maple_leaf: "graphics/emojis/maple_leaf.png",
  leaves: "graphics/emojis/leaves.png",
  fallen_leaf: "graphics/emojis/fallen_leaf.png",
  herb: "graphics/emojis/herb.png",
  mushroom: "graphics/emojis/mushroom.png",
  cactus: "graphics/emojis/cactus.png",
  palm_tree: "graphics/emojis/palm_tree.png",
  evergreen_tree: "graphics/emojis/evergreen_tree.png",
  deciduous_tree: "graphics/emojis/deciduous_tree.png",
  chestnut: "graphics/emojis/chestnut.png",
  seedling: "graphics/emojis/seedling.png",
  blossom: "graphics/emojis/blossom.png",
  ear_of_rice: "graphics/emojis/ear_of_rice.png",
  shell: "graphics/emojis/shell.png",
  globe_with_meridians: "graphics/emojis/globe_with_meridians.png",
  sun_with_face: "graphics/emojis/sun_with_face.png",
  full_moon_with_face: "graphics/emojis/full_moon_with_face.png",
  new_moon_with_face: "graphics/emojis/new_moon_with_face.png",
  new_moon: "graphics/emojis/new_moon.png",
  waxing_crescent_moon: "graphics/emojis/waxing_crescent_moon.png",
  first_quarter_moon: "graphics/emojis/first_quarter_moon.png",
  waxing_gibbous_moon: "graphics/emojis/waxing_gibbous_moon.png",
  full_moon: "graphics/emojis/full_moon.png",
  waning_gibbous_moon: "graphics/emojis/waning_gibbous_moon.png",
  last_quarter_moon: "graphics/emojis/last_quarter_moon.png",
  waning_crescent_moon: "graphics/emojis/waning_crescent_moon.png",
  last_quarter_moon_with_face: "graphics/emojis/last_quarter_moon_with_face.png",
  first_quarter_moon_with_face: "graphics/emojis/first_quarter_moon_with_face.png",
  crescent_moon: "graphics/emojis/crescent_moon.png",
  earth_africa: "graphics/emojis/earth_africa.png",
  earth_americas: "graphics/emojis/earth_americas.png",
  earth_asia: "graphics/emojis/earth_asia.png",
  volcano: "graphics/emojis/volcano.png",
  milky_way: "graphics/emojis/milky_way.png",
  partly_sunny: "graphics/emojis/partly_sunny.png",
  octocat: "graphics/emojis/octocat.png",
  squirrel: "graphics/emojis/squirrel.png",
  bamboo: "graphics/emojis/bamboo.png",
  gift_heart: "graphics/emojis/gift_heart.png",
  dolls: "graphics/emojis/dolls.png",
  school_satchel: "graphics/emojis/school_satchel.png",
  mortar_board: "graphics/emojis/mortar_board.png",
  flags: "graphics/emojis/flags.png",
  fireworks: "graphics/emojis/fireworks.png",
  sparkler: "graphics/emojis/sparkler.png",
  wind_chime: "graphics/emojis/wind_chime.png",
  rice_scene: "graphics/emojis/rice_scene.png",
  jack_o_lantern: "graphics/emojis/jack_o_lantern.png",
  ghost: "graphics/emojis/ghost.png",
  santa: "graphics/emojis/santa.png",
  christmas_tree: "graphics/emojis/christmas_tree.png",
  gift: "graphics/emojis/gift.png",
  bell: "graphics/emojis/bell.png",
  no_bell: "graphics/emojis/no_bell.png",
  tanabata_tree: "graphics/emojis/tanabata_tree.png",
  tada: "graphics/emojis/tada.png",
  confetti_ball: "graphics/emojis/confetti_ball.png",
  balloon: "graphics/emojis/balloon.png",
  crystal_ball: "graphics/emojis/crystal_ball.png",
  cd: "graphics/emojis/cd.png",
  dvd: "graphics/emojis/dvd.png",
  floppy_disk: "graphics/emojis/floppy_disk.png",
  camera: "graphics/emojis/camera.png",
  video_camera: "graphics/emojis/video_camera.png",
  movie_camera: "graphics/emojis/movie_camera.png",
  computer: "graphics/emojis/computer.png",
  tv: "graphics/emojis/tv.png",
  iphone: "graphics/emojis/iphone.png",
  phone: "graphics/emojis/phone.png",
  telephone: "graphics/emojis/telephone.png",
  telephone_receiver: "graphics/emojis/telephone_receiver.png",
  pager: "graphics/emojis/pager.png",
  fax: "graphics/emojis/fax.png",
  minidisc: "graphics/emojis/minidisc.png",
  vhs: "graphics/emojis/vhs.png",
  sound: "graphics/emojis/sound.png",
  speaker: "graphics/emojis/speaker.png",
  mute: "graphics/emojis/mute.png",
  loudspeaker: "graphics/emojis/loudspeaker.png",
  mega: "graphics/emojis/mega.png",
  hourglass: "graphics/emojis/hourglass.png",
  hourglass_flowing_sand: "graphics/emojis/hourglass_flowing_sand.png",
  alarm_clock: "graphics/emojis/alarm_clock.png",
  watch: "graphics/emojis/watch.png",
  radio: "graphics/emojis/radio.png",
  satellite: "graphics/emojis/satellite.png",
  loop: "graphics/emojis/loop.png",
  mag: "graphics/emojis/mag.png",
  mag_right: "graphics/emojis/mag_right.png",
  unlock: "graphics/emojis/unlock.png",
  lock: "graphics/emojis/lock.png",
  lock_with_ink_pen: "graphics/emojis/lock_with_ink_pen.png",
  closed_lock_with_key: "graphics/emojis/closed_lock_with_key.png",
  key: "graphics/emojis/key.png",
  bulb: "graphics/emojis/bulb.png",
  flashlight: "graphics/emojis/flashlight.png",
  high_brightness: "graphics/emojis/high_brightness.png",
  low_brightness: "graphics/emojis/low_brightness.png",
  electric_plug: "graphics/emojis/electric_plug.png",
  battery: "graphics/emojis/battery.png",
  calling: "graphics/emojis/calling.png",
  email: "graphics/emojis/email.png",
  mailbox: "graphics/emojis/mailbox.png",
  postbox: "graphics/emojis/postbox.png",
  bath: "graphics/emojis/bath.png",
  bathtub: "graphics/emojis/bathtub.png",
  shower: "graphics/emojis/shower.png",
  toilet: "graphics/emojis/toilet.png",
  wrench: "graphics/emojis/wrench.png",
  nut_and_bolt: "graphics/emojis/nut_and_bolt.png",
  hammer: "graphics/emojis/hammer.png",
  seat: "graphics/emojis/seat.png",
  moneybag: "graphics/emojis/moneybag.png",
  yen: "graphics/emojis/yen.png",
  dollar: "graphics/emojis/dollar.png",
  pound: "graphics/emojis/pound.png",
  euro: "graphics/emojis/euro.png",
  credit_card: "graphics/emojis/credit_card.png",
  money_with_wings: "graphics/emojis/money_with_wings.png",
  "e-mail": "graphics/emojis/e-mail.png",
  inbox_tray: "graphics/emojis/inbox_tray.png",
  outbox_tray: "graphics/emojis/outbox_tray.png",
  envelope: "graphics/emojis/envelope.png",
  incoming_envelope: "graphics/emojis/incoming_envelope.png",
  postal_horn: "graphics/emojis/postal_horn.png",
  mailbox_closed: "graphics/emojis/mailbox_closed.png",
  mailbox_with_mail: "graphics/emojis/mailbox_with_mail.png",
  mailbox_with_no_mail: "graphics/emojis/mailbox_with_no_mail.png",
  package: "graphics/emojis/package.png",
  door: "graphics/emojis/door.png",
  smoking: "graphics/emojis/smoking.png",
  bomb: "graphics/emojis/bomb.png",
  gun: "graphics/emojis/gun.png",
  hocho: "graphics/emojis/hocho.png",
  pill: "graphics/emojis/pill.png",
  syringe: "graphics/emojis/syringe.png",
  page_facing_up: "graphics/emojis/page_facing_up.png",
  page_with_curl: "graphics/emojis/page_with_curl.png",
  bookmark_tabs: "graphics/emojis/bookmark_tabs.png",
  bar_chart: "graphics/emojis/bar_chart.png",
  chart_with_upwards_trend: "graphics/emojis/chart_with_upwards_trend.png",
  chart_with_downwards_trend: "graphics/emojis/chart_with_downwards_trend.png",
  scroll: "graphics/emojis/scroll.png",
  clipboard: "graphics/emojis/clipboard.png",
  calendar: "graphics/emojis/calendar.png",
  date: "graphics/emojis/date.png",
  card_index: "graphics/emojis/card_index.png",
  file_folder: "graphics/emojis/file_folder.png",
  open_file_folder: "graphics/emojis/open_file_folder.png",
  scissors: "graphics/emojis/scissors.png",
  pushpin: "graphics/emojis/pushpin.png",
  paperclip: "graphics/emojis/paperclip.png",
  black_nib: "graphics/emojis/black_nib.png",
  pencil2: "graphics/emojis/pencil2.png",
  straight_ruler: "graphics/emojis/straight_ruler.png",
  triangular_ruler: "graphics/emojis/triangular_ruler.png",
  closed_book: "graphics/emojis/closed_book.png",
  green_book: "graphics/emojis/green_book.png",
  blue_book: "graphics/emojis/blue_book.png",
  orange_book: "graphics/emojis/orange_book.png",
  notebook: "graphics/emojis/notebook.png",
  notebook_with_decorative_cover: "graphics/emojis/notebook_with_decorative_cover.png",
  ledger: "graphics/emojis/ledger.png",
  books: "graphics/emojis/books.png",
  bookmark: "graphics/emojis/bookmark.png",
  name_badge: "graphics/emojis/name_badge.png",
  microscope: "graphics/emojis/microscope.png",
  telescope: "graphics/emojis/telescope.png",
  newspaper: "graphics/emojis/newspaper.png",
  football: "graphics/emojis/football.png",
  basketball: "graphics/emojis/basketball.png",
  soccer: "graphics/emojis/soccer.png",
  baseball: "graphics/emojis/baseball.png",
  tennis: "graphics/emojis/tennis.png",
  "8ball": "graphics/emojis/8ball.png",
  rugby_football: "graphics/emojis/rugby_football.png",
  bowling: "graphics/emojis/bowling.png",
  golf: "graphics/emojis/golf.png",
  mountain_bicyclist: "graphics/emojis/mountain_bicyclist.png",
  bicyclist: "graphics/emojis/bicyclist.png",
  horse_racing: "graphics/emojis/horse_racing.png",
  snowboarder: "graphics/emojis/snowboarder.png",
  swimmer: "graphics/emojis/swimmer.png",
  surfer: "graphics/emojis/surfer.png",
  ski: "graphics/emojis/ski.png",
  spades: "graphics/emojis/spades.png",
  hearts: "graphics/emojis/hearts.png",
  clubs: "graphics/emojis/clubs.png",
  diamonds: "graphics/emojis/diamonds.png",
  gem: "graphics/emojis/gem.png",
  ring: "graphics/emojis/ring.png",
  trophy: "graphics/emojis/trophy.png",
  musical_score: "graphics/emojis/musical_score.png",
  musical_keyboard: "graphics/emojis/musical_keyboard.png",
  violin: "graphics/emojis/violin.png",
  space_invader: "graphics/emojis/space_invader.png",
  video_game: "graphics/emojis/video_game.png",
  black_joker: "graphics/emojis/black_joker.png",
  flower_playing_cards: "graphics/emojis/flower_playing_cards.png",
  game_die: "graphics/emojis/game_die.png",
  dart: "graphics/emojis/dart.png",
  mahjong: "graphics/emojis/mahjong.png",
  clapper: "graphics/emojis/clapper.png",
  memo: "graphics/emojis/memo.png",
  pencil: "graphics/emojis/pencil.png",
  book: "graphics/emojis/book.png",
  art: "graphics/emojis/art.png",
  microphone: "graphics/emojis/microphone.png",
  headphones: "graphics/emojis/headphones.png",
  trumpet: "graphics/emojis/trumpet.png",
  saxophone: "graphics/emojis/saxophone.png",
  guitar: "graphics/emojis/guitar.png",
  shoe: "graphics/emojis/shoe.png",
  sandal: "graphics/emojis/sandal.png",
  high_heel: "graphics/emojis/high_heel.png",
  lipstick: "graphics/emojis/lipstick.png",
  boot: "graphics/emojis/boot.png",
  shirt: "graphics/emojis/shirt.png",
  tshirt: "graphics/emojis/tshirt.png",
  necktie: "graphics/emojis/necktie.png",
  womans_clothes: "graphics/emojis/womans_clothes.png",
  dress: "graphics/emojis/dress.png",
  running_shirt_with_sash: "graphics/emojis/running_shirt_with_sash.png",
  jeans: "graphics/emojis/jeans.png",
  kimono: "graphics/emojis/kimono.png",
  bikini: "graphics/emojis/bikini.png",
  ribbon: "graphics/emojis/ribbon.png",
  tophat: "graphics/emojis/tophat.png",
  crown: "graphics/emojis/crown.png",
  womans_hat: "graphics/emojis/womans_hat.png",
  mans_shoe: "graphics/emojis/mans_shoe.png",
  closed_umbrella: "graphics/emojis/closed_umbrella.png",
  briefcase: "graphics/emojis/briefcase.png",
  handbag: "graphics/emojis/handbag.png",
  pouch: "graphics/emojis/pouch.png",
  purse: "graphics/emojis/purse.png",
  eyeglasses: "graphics/emojis/eyeglasses.png",
  fishing_pole_and_fish: "graphics/emojis/fishing_pole_and_fish.png",
  coffee: "graphics/emojis/coffee.png",
  tea: "graphics/emojis/tea.png",
  sake: "graphics/emojis/sake.png",
  baby_bottle: "graphics/emojis/baby_bottle.png",
  beer: "graphics/emojis/beer.png",
  beers: "graphics/emojis/beers.png",
  cocktail: "graphics/emojis/cocktail.png",
  tropical_drink: "graphics/emojis/tropical_drink.png",
  wine_glass: "graphics/emojis/wine_glass.png",
  fork_and_knife: "graphics/emojis/fork_and_knife.png",
  pizza: "graphics/emojis/pizza.png",
  hamburger: "graphics/emojis/hamburger.png",
  fries: "graphics/emojis/fries.png",
  poultry_leg: "graphics/emojis/poultry_leg.png",
  meat_on_bone: "graphics/emojis/meat_on_bone.png",
  spaghetti: "graphics/emojis/spaghetti.png",
  curry: "graphics/emojis/curry.png",
  fried_shrimp: "graphics/emojis/fried_shrimp.png",
  bento: "graphics/emojis/bento.png",
  sushi: "graphics/emojis/sushi.png",
  fish_cake: "graphics/emojis/fish_cake.png",
  rice_ball: "graphics/emojis/rice_ball.png",
  rice_cracker: "graphics/emojis/rice_cracker.png",
  rice: "graphics/emojis/rice.png",
  ramen: "graphics/emojis/ramen.png",
  stew: "graphics/emojis/stew.png",
  oden: "graphics/emojis/oden.png",
  dango: "graphics/emojis/dango.png",
  egg: "graphics/emojis/egg.png",
  bread: "graphics/emojis/bread.png",
  doughnut: "graphics/emojis/doughnut.png",
  custard: "graphics/emojis/custard.png",
  icecream: "graphics/emojis/icecream.png",
  ice_cream: "graphics/emojis/ice_cream.png",
  shaved_ice: "graphics/emojis/shaved_ice.png",
  birthday: "graphics/emojis/birthday.png",
  cake: "graphics/emojis/cake.png",
  cookie: "graphics/emojis/cookie.png",
  chocolate_bar: "graphics/emojis/chocolate_bar.png",
  candy: "graphics/emojis/candy.png",
  lollipop: "graphics/emojis/lollipop.png",
  honey_pot: "graphics/emojis/honey_pot.png",
  apple: "graphics/emojis/apple.png",
  green_apple: "graphics/emojis/green_apple.png",
  tangerine: "graphics/emojis/tangerine.png",
  lemon: "graphics/emojis/lemon.png",
  cherries: "graphics/emojis/cherries.png",
  grapes: "graphics/emojis/grapes.png",
  watermelon: "graphics/emojis/watermelon.png",
  strawberry: "graphics/emojis/strawberry.png",
  peach: "graphics/emojis/peach.png",
  melon: "graphics/emojis/melon.png",
  banana: "graphics/emojis/banana.png",
  pear: "graphics/emojis/pear.png",
  pineapple: "graphics/emojis/pineapple.png",
  sweet_potato: "graphics/emojis/sweet_potato.png",
  eggplant: "graphics/emojis/eggplant.png",
  tomato: "graphics/emojis/tomato.png",
  corn: "graphics/emojis/corn.png",
  house: "graphics/emojis/house.png",
  house_with_garden: "graphics/emojis/house_with_garden.png",
  school: "graphics/emojis/school.png",
  office: "graphics/emojis/office.png",
  post_office: "graphics/emojis/post_office.png",
  hospital: "graphics/emojis/hospital.png",
  bank: "graphics/emojis/bank.png",
  convenience_store: "graphics/emojis/convenience_store.png",
  love_hotel: "graphics/emojis/love_hotel.png",
  hotel: "graphics/emojis/hotel.png",
  wedding: "graphics/emojis/wedding.png",
  church: "graphics/emojis/church.png",
  department_store: "graphics/emojis/department_store.png",
  european_post_office: "graphics/emojis/european_post_office.png",
  city_sunrise: "graphics/emojis/city_sunrise.png",
  city_sunset: "graphics/emojis/city_sunset.png",
  japanese_castle: "graphics/emojis/japanese_castle.png",
  european_castle: "graphics/emojis/european_castle.png",
  tent: "graphics/emojis/tent.png",
  factory: "graphics/emojis/factory.png",
  tokyo_tower: "graphics/emojis/tokyo_tower.png",
  japan: "graphics/emojis/japan.png",
  mount_fuji: "graphics/emojis/mount_fuji.png",
  sunrise_over_mountains: "graphics/emojis/sunrise_over_mountains.png",
  sunrise: "graphics/emojis/sunrise.png",
  stars: "graphics/emojis/stars.png",
  statue_of_liberty: "graphics/emojis/statue_of_liberty.png",
  bridge_at_night: "graphics/emojis/bridge_at_night.png",
  carousel_horse: "graphics/emojis/carousel_horse.png",
  rainbow: "graphics/emojis/rainbow.png",
  ferris_wheel: "graphics/emojis/ferris_wheel.png",
  fountain: "graphics/emojis/fountain.png",
  roller_coaster: "graphics/emojis/roller_coaster.png",
  ship: "graphics/emojis/ship.png",
  speedboat: "graphics/emojis/speedboat.png",
  boat: "graphics/emojis/boat.png",
  sailboat: "graphics/emojis/sailboat.png",
  rowboat: "graphics/emojis/rowboat.png",
  anchor: "graphics/emojis/anchor.png",
  rocket: "graphics/emojis/rocket.png",
  airplane: "graphics/emojis/airplane.png",
  helicopter: "graphics/emojis/helicopter.png",
  steam_locomotive: "graphics/emojis/steam_locomotive.png",
  tram: "graphics/emojis/tram.png",
  mountain_railway: "graphics/emojis/mountain_railway.png",
  bike: "graphics/emojis/bike.png",
  aerial_tramway: "graphics/emojis/aerial_tramway.png",
  suspension_railway: "graphics/emojis/suspension_railway.png",
  mountain_cableway: "graphics/emojis/mountain_cableway.png",
  tractor: "graphics/emojis/tractor.png",
  blue_car: "graphics/emojis/blue_car.png",
  oncoming_automobile: "graphics/emojis/oncoming_automobile.png",
  car: "graphics/emojis/car.png",
  red_car: "graphics/emojis/red_car.png",
  taxi: "graphics/emojis/taxi.png",
  oncoming_taxi: "graphics/emojis/oncoming_taxi.png",
  articulated_lorry: "graphics/emojis/articulated_lorry.png",
  bus: "graphics/emojis/bus.png",
  oncoming_bus: "graphics/emojis/oncoming_bus.png",
  rotating_light: "graphics/emojis/rotating_light.png",
  police_car: "graphics/emojis/police_car.png",
  oncoming_police_car: "graphics/emojis/oncoming_police_car.png",
  fire_engine: "graphics/emojis/fire_engine.png",
  ambulance: "graphics/emojis/ambulance.png",
  minibus: "graphics/emojis/minibus.png",
  truck: "graphics/emojis/truck.png",
  train: "graphics/emojis/train.png",
  station: "graphics/emojis/station.png",
  train2: "graphics/emojis/train2.png",
  bullettrain_front: "graphics/emojis/bullettrain_front.png",
  bullettrain_side: "graphics/emojis/bullettrain_side.png",
  light_rail: "graphics/emojis/light_rail.png",
  monorail: "graphics/emojis/monorail.png",
  railway_car: "graphics/emojis/railway_car.png",
  trolleybus: "graphics/emojis/trolleybus.png",
  ticket: "graphics/emojis/ticket.png",
  fuelpump: "graphics/emojis/fuelpump.png",
  vertical_traffic_light: "graphics/emojis/vertical_traffic_light.png",
  traffic_light: "graphics/emojis/traffic_light.png",
  warning: "graphics/emojis/warning.png",
  construction: "graphics/emojis/construction.png",
  beginner: "graphics/emojis/beginner.png",
  atm: "graphics/emojis/atm.png",
  slot_machine: "graphics/emojis/slot_machine.png",
  busstop: "graphics/emojis/busstop.png",
  barber: "graphics/emojis/barber.png",
  hotsprings: "graphics/emojis/hotsprings.png",
  checkered_flag: "graphics/emojis/checkered_flag.png",
  crossed_flags: "graphics/emojis/crossed_flags.png",
  izakaya_lantern: "graphics/emojis/izakaya_lantern.png",
  moyai: "graphics/emojis/moyai.png",
  circus_tent: "graphics/emojis/circus_tent.png",
  performing_arts: "graphics/emojis/performing_arts.png",
  round_pushpin: "graphics/emojis/round_pushpin.png",
  triangular_flag_on_post: "graphics/emojis/triangular_flag_on_post.png",
  jp: "graphics/emojis/jp.png",
  kr: "graphics/emojis/kr.png",
  cn: "graphics/emojis/cn.png",
  us: "graphics/emojis/us.png",
  fr: "graphics/emojis/fr.png",
  es: "graphics/emojis/es.png",
  it: "graphics/emojis/it.png",
  ru: "graphics/emojis/ru.png",
  gb: "graphics/emojis/gb.png",
  uk: "graphics/emojis/uk.png",
  de: "graphics/emojis/de.png",
  one: "graphics/emojis/one.png",
  two: "graphics/emojis/two.png",
  three: "graphics/emojis/three.png",
  four: "graphics/emojis/four.png",
  five: "graphics/emojis/five.png",
  six: "graphics/emojis/six.png",
  seven: "graphics/emojis/seven.png",
  eight: "graphics/emojis/eight.png",
  nine: "graphics/emojis/nine.png",
  keycap_ten: "graphics/emojis/keycap_ten.png",
  zero: "graphics/emojis/zero.png",
  hash: "graphics/emojis/hash.png",
  symbols: "graphics/emojis/symbols.png",
  arrow_backward: "graphics/emojis/arrow_backward.png",
  arrow_down: "graphics/emojis/arrow_down.png",
  arrow_forward: "graphics/emojis/arrow_forward.png",
  arrow_left: "graphics/emojis/arrow_left.png",
  capital_abcd: "graphics/emojis/capital_abcd.png",
  abcd: "graphics/emojis/abcd.png",
  abc: "graphics/emojis/abc.png",
  arrow_lower_left: "graphics/emojis/arrow_lower_left.png",
  arrow_lower_right: "graphics/emojis/arrow_lower_right.png",
  arrow_right: "graphics/emojis/arrow_right.png",
  arrow_up: "graphics/emojis/arrow_up.png",
  arrow_upper_left: "graphics/emojis/arrow_upper_left.png",
  arrow_upper_right: "graphics/emojis/arrow_upper_right.png",
  arrow_double_down: "graphics/emojis/arrow_double_down.png",
  arrow_double_up: "graphics/emojis/arrow_double_up.png",
  arrow_down_small: "graphics/emojis/arrow_down_small.png",
  arrow_heading_down: "graphics/emojis/arrow_heading_down.png",
  arrow_heading_up: "graphics/emojis/arrow_heading_up.png",
  leftwards_arrow_with_hook: "graphics/emojis/leftwards_arrow_with_hook.png",
  arrow_right_hook: "graphics/emojis/arrow_right_hook.png",
  left_right_arrow: "graphics/emojis/left_right_arrow.png",
  arrow_up_down: "graphics/emojis/arrow_up_down.png",
  arrow_up_small: "graphics/emojis/arrow_up_small.png",
  arrows_clockwise: "graphics/emojis/arrows_clockwise.png",
  arrows_counterclockwise: "graphics/emojis/arrows_counterclockwise.png",
  rewind: "graphics/emojis/rewind.png",
  fast_forward: "graphics/emojis/fast_forward.png",
  information_source: "graphics/emojis/information_source.png",
  ok: "graphics/emojis/ok.png",
  twisted_rightwards_arrows: "graphics/emojis/twisted_rightwards_arrows.png",
  repeat: "graphics/emojis/repeat.png",
  repeat_one: "graphics/emojis/repeat_one.png",
  new: "graphics/emojis/new.png",
  top: "graphics/emojis/top.png",
  up: "graphics/emojis/up.png",
  cool: "graphics/emojis/cool.png",
  free: "graphics/emojis/free.png",
  ng: "graphics/emojis/ng.png",
  cinema: "graphics/emojis/cinema.png",
  koko: "graphics/emojis/koko.png",
  signal_strength: "graphics/emojis/signal_strength.png",
  u5272: "graphics/emojis/u5272.png",
  u5408: "graphics/emojis/u5408.png",
  u55b6: "graphics/emojis/u55b6.png",
  u6307: "graphics/emojis/u6307.png",
  u6708: "graphics/emojis/u6708.png",
  u6709: "graphics/emojis/u6709.png",
  u6e80: "graphics/emojis/u6e80.png",
  u7121: "graphics/emojis/u7121.png",
  u7533: "graphics/emojis/u7533.png",
  u7a7a: "graphics/emojis/u7a7a.png",
  u7981: "graphics/emojis/u7981.png",
  sa: "graphics/emojis/sa.png",
  restroom: "graphics/emojis/restroom.png",
  mens: "graphics/emojis/mens.png",
  womens: "graphics/emojis/womens.png",
  baby_symbol: "graphics/emojis/baby_symbol.png",
  no_smoking: "graphics/emojis/no_smoking.png",
  parking: "graphics/emojis/parking.png",
  wheelchair: "graphics/emojis/wheelchair.png",
  metro: "graphics/emojis/metro.png",
  baggage_claim: "graphics/emojis/baggage_claim.png",
  accept: "graphics/emojis/accept.png",
  wc: "graphics/emojis/wc.png",
  potable_water: "graphics/emojis/potable_water.png",
  put_litter_in_its_place: "graphics/emojis/put_litter_in_its_place.png",
  secret: "graphics/emojis/secret.png",
  congratulations: "graphics/emojis/congratulations.png",
  m: "graphics/emojis/m.png",
  passport_control: "graphics/emojis/passport_control.png",
  left_luggage: "graphics/emojis/left_luggage.png",
  customs: "graphics/emojis/customs.png",
  ideograph_advantage: "graphics/emojis/ideograph_advantage.png",
  cl: "graphics/emojis/cl.png",
  sos: "graphics/emojis/sos.png",
  id: "graphics/emojis/id.png",
  no_entry_sign: "graphics/emojis/no_entry_sign.png",
  underage: "graphics/emojis/underage.png",
  no_mobile_phones: "graphics/emojis/no_mobile_phones.png",
  do_not_litter: "graphics/emojis/do_not_litter.png",
  "non-potable_water": "graphics/emojis/non-potable_water.png",
  no_bicycles: "graphics/emojis/no_bicycles.png",
  no_pedestrians: "graphics/emojis/no_pedestrians.png",
  children_crossing: "graphics/emojis/children_crossing.png",
  no_entry: "graphics/emojis/no_entry.png",
  eight_spoked_asterisk: "graphics/emojis/eight_spoked_asterisk.png",
  sparkle: "graphics/emojis/sparkle.png",
  eight_pointed_black_star: "graphics/emojis/eight_pointed_black_star.png",
  heart_decoration: "graphics/emojis/heart_decoration.png",
  vs: "graphics/emojis/vs.png",
  vibration_mode: "graphics/emojis/vibration_mode.png",
  mobile_phone_off: "graphics/emojis/mobile_phone_off.png",
  chart: "graphics/emojis/chart.png",
  currency_exchange: "graphics/emojis/currency_exchange.png",
  aries: "graphics/emojis/aries.png",
  taurus: "graphics/emojis/taurus.png",
  gemini: "graphics/emojis/gemini.png",
  cancer: "graphics/emojis/cancer.png",
  leo: "graphics/emojis/leo.png",
  virgo: "graphics/emojis/virgo.png",
  libra: "graphics/emojis/libra.png",
  scorpius: "graphics/emojis/scorpius.png",
  sagittarius: "graphics/emojis/sagittarius.png",
  capricorn: "graphics/emojis/capricorn.png",
  aquarius: "graphics/emojis/aquarius.png",
  pisces: "graphics/emojis/pisces.png",
  ophiuchus: "graphics/emojis/ophiuchus.png",
  six_pointed_star: "graphics/emojis/six_pointed_star.png",
  negative_squared_cross_mark: "graphics/emojis/negative_squared_cross_mark.png",
  a: "graphics/emojis/a.png",
  b: "graphics/emojis/b.png",
  ab: "graphics/emojis/ab.png",
  o2: "graphics/emojis/o2.png",
  diamond_shape_with_a_dot_inside: "graphics/emojis/diamond_shape_with_a_dot_inside.png",
  recycle: "graphics/emojis/recycle.png",
  end: "graphics/emojis/end.png",
  back: "graphics/emojis/back.png",
  on: "graphics/emojis/on.png",
  soon: "graphics/emojis/soon.png",
  clock1: "graphics/emojis/clock1.png",
  clock130: "graphics/emojis/clock130.png",
  clock10: "graphics/emojis/clock10.png",
  clock1030: "graphics/emojis/clock1030.png",
  clock11: "graphics/emojis/clock11.png",
  clock1130: "graphics/emojis/clock1130.png",
  clock12: "graphics/emojis/clock12.png",
  clock1230: "graphics/emojis/clock1230.png",
  clock2: "graphics/emojis/clock2.png",
  clock230: "graphics/emojis/clock230.png",
  clock3: "graphics/emojis/clock3.png",
  clock330: "graphics/emojis/clock330.png",
  clock4: "graphics/emojis/clock4.png",
  clock430: "graphics/emojis/clock430.png",
  clock5: "graphics/emojis/clock5.png",
  clock530: "graphics/emojis/clock530.png",
  clock6: "graphics/emojis/clock6.png",
  clock630: "graphics/emojis/clock630.png",
  clock7: "graphics/emojis/clock7.png",
  clock730: "graphics/emojis/clock730.png",
  clock8: "graphics/emojis/clock8.png",
  clock830: "graphics/emojis/clock830.png",
  clock9: "graphics/emojis/clock9.png",
  clock930: "graphics/emojis/clock930.png",
  heavy_dollar_sign: "graphics/emojis/heavy_dollar_sign.png",
  copyright: "graphics/emojis/copyright.png",
  registered: "graphics/emojis/registered.png",
  tm: "graphics/emojis/tm.png",
  x: "graphics/emojis/x.png",
  heavy_exclamation_mark: "graphics/emojis/heavy_exclamation_mark.png",
  bangbang: "graphics/emojis/bangbang.png",
  interrobang: "graphics/emojis/interrobang.png",
  o: "graphics/emojis/o.png",
  heavy_multiplication_x: "graphics/emojis/heavy_multiplication_x.png",
  heavy_plus_sign: "graphics/emojis/heavy_plus_sign.png",
  heavy_minus_sign: "graphics/emojis/heavy_minus_sign.png",
  heavy_division_sign: "graphics/emojis/heavy_division_sign.png",
  white_flower: "graphics/emojis/white_flower.png",
  heavy_check_mark: "graphics/emojis/heavy_check_mark.png",
  ballot_box_with_check: "graphics/emojis/ballot_box_with_check.png",
  radio_button: "graphics/emojis/radio_button.png",
  link: "graphics/emojis/link.png",
  curly_loop: "graphics/emojis/curly_loop.png",
  wavy_dash: "graphics/emojis/wavy_dash.png",
  part_alternation_mark: "graphics/emojis/part_alternation_mark.png",
  trident: "graphics/emojis/trident.png",
  black_small_square: "graphics/emojis/black_small_square.png",
  white_small_square: "graphics/emojis/white_small_square.png",
  black_medium_small_square: "graphics/emojis/black_medium_small_square.png",
  white_medium_small_square: "graphics/emojis/white_medium_small_square.png",
  black_medium_square: "graphics/emojis/black_medium_square.png",
  white_medium_square: "graphics/emojis/white_medium_square.png",
  black_large_square: "graphics/emojis/black_square.png",
  white_large_square: "graphics/emojis/white_large_square.png",
  white_check_mark: "graphics/emojis/white_check_mark.png",
  black_square_button: "graphics/emojis/black_square_button.png",
  white_square_button: "graphics/emojis/white_square_button.png",
  black_circle: "graphics/emojis/black_circle.png",
  white_circle: "graphics/emojis/white_circle.png",
  red_circle: "graphics/emojis/red_circle.png",
  large_blue_circle: "graphics/emojis/large_blue_circle.png",
  large_blue_diamond: "graphics/emojis/large_blue_diamond.png",
  large_orange_diamond: "graphics/emojis/large_orange_diamond.png",
  small_blue_diamond: "graphics/emojis/small_blue_diamond.png",
  small_orange_diamond: "graphics/emojis/small_orange_diamond.png",
  small_red_triangle: "graphics/emojis/small_red_triangle.png",
  small_red_triangle_down: "graphics/emojis/small_red_triangle_down.png",
  shipit: "graphics/emojis/shipit.png",
};
for (let key in emoji) {
  // key = ":" + key + ":";         //new key     //old key   //old key
  delete Object.assign(emoji, {
    [":" + key + ":"]: emoji[key],
  })[key]; //Переименование ключей в объекте emoji: smile => :smile:
}

let msgOnServer = document.getElementById("msgOnServer");

let numberOfMessage = 0;

async function jsonPost(url, data) {
  // return new Promise((resolve, reject) => {
  //   var x = new XMLHttpRequest();
  //   x.onerror = () => reject(new Error("jsonPost failed"));
  //   //x.setRequestHeader('Content-Type', 'application/json');
  //   x.open("POST", url, true);
  //   x.send(JSON.stringify(data));

  //   x.onreadystatechange = () => {
  //     if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
  //       resolve(JSON.parse(x.responseText));
  //     } else if (x.status != 200) {
  //       reject(new Error("status is not 200"));
  //     }
  //   };
  // });

  console.log("jsonPost started");

  // } catch (e) {
  //   console.error(e);
  // }

  // .then((response) => JSON.parse(response))
  // .catch(new Error("status is not 200"));

  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  console.log("response:", response);
  return await response.json();
}

// send.onclick = function () {
//   jsonPost("http://students.a-level.com.ua:10012", {
//     func: "addMessage",
//     nick: name.value,
//     message: msg.value,
//   });
//   console.log(name.value, msg.value);
// };

for (let key in emoji) {
  let img = document.createElement("img");
  img.setAttribute("style", "width: 25px; height: 25px");
  img.setAttribute("id", [key]);
  img.setAttribute(
    "src",
    `https://www.webfx.com/tools/emoji-cheat-sheet/${emoji[key]}`
  );
  emojiList.appendChild(img);
  img.addEventListener("click", () => {
    msg.value += key;
    console.log("img");
  });
}

let sendMessages = async function (name, msg) {
  send.disabled = true;
  // msg = emojiSend(msg);
  if (EMOJI_REGEXP.test(msg)) {
    msg = emojiSend(msg);
  }
  if (YOUTUBE_REGEXP.test(msg)) {
    msg = youtube(msg);
  }
  if (IMAGE_REGEXP.test(msg)) {
    msg = images(msg);
  }
  await jsonPost("http://students.a-level.com.ua:10012", {
    func: "addMessage",
    nick: name,
    message: msg,
  });
  console.log(name.value, msg.value);
  send.disabled = false;
};
// let a = {
//   func: "addMessage",
//   nick: name,
//   message: msg,
// }
// console.log(JSON.stringify(a));

let getMessages = async function () {
  let data = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "getMessages",
    messageId: numberOfMessage,
  });
  // data.then((response) => JSON.parse(response));
  console.log(data);
  console.log("data.nextMessageId: ", data.nextMessageId);
  numberOfMessage = data.nextMessageId;
  for (let key in data) {
    if (key == "data") {
      for (let index of data[key]) {
        console.log(index);

        let name = document.createElement("b");
        let msg = document.createElement("span");
        let time = document.createElement("i");

        name.innerText = `${index.nick}: `;
        msg.innerHTML = `${index.message}`;
        // .match(DATE_TIME)
        // let dateAndTime = new Date(index.timestamp);
        // console.log(dateAndTime.toGMTString());
        time.innerHTML = `${new Date(index.timestamp)}</br>`;
        msgOnServer.appendChild(time);
        msgOnServer.appendChild(msg);
        msgOnServer.appendChild(name);
      }
    }
  }
};
const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

send.onclick = () => {
  // sendMessage(name.value, msg.value);
  sendAndCheck();
};

let sendAndCheck = async function () {
  await sendMessages(name.value, msg.value);
  getMessages();
};

let checkLoop = async function () {
  while (true) {
    await delay(3000);
    getMessages();
  }
};
checkLoop();

function emojiSend(str) {
  let newStr = "";
  for (let key in emoji) {
    let position = 0;
    while (true) {
      newStr = str.replace(
        `${key}`,
        `<img style="width: 25px; height: 25px;" src=https://www.webfx.com/tools/emoji-cheat-sheet/${emoji[key]} />`
      );
      str = newStr;
      let find = str.indexOf(`${key}`, position);
      if (find == -1) {
        break;
      }
    }
    // console.log("newStr IN ZAMENA: " + newStr);
  }
  // console.log('newStr: ', newStr);
  // if (YOUTUBE_REGEXP.test(newStr)) {
  //   newStr += youtube(newStr);
  //   console.log('newStr: ', newStr);
  // }
  // if (IMAGE_REGEXP.test(newStr)) {
  //   newStr += images(newStr);
  //   console.log('newStr: ', newStr);
  // }
  // newStr = newStr.replace(
  //   /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g, "");
  // newStr = newStr.replace(/http(?:s?):\/\/(.*)(gif|jpe?g|bmp|png)$/igm, "");
  return newStr;
}

// YOUTUBE_REGEXP
function youtube(str) {
  let array = [];
  array = str.match(
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/gim
  );
  console.log("array: ", array);
  if (array) {
    console.log(array);
    let linkOnYouTube = `<span>${str.replace(YOUTUBE_REGEXP, "")}</span><br />`;
    for (let i = 0; i < array.length; i++) {
      linkOnYouTube += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${array[
        i
      ]
        .replace(YOUTUBE_REGEXP, array[i].match(YOUTUBE_REGEXP_ID))
        .replace(
          "=",
          ""
        )}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><a target="_blank" href="${
        array[i]
      }">${array[i]}</a><br />`;
    }
    return linkOnYouTube;
  } else {
    return str;
  }
}

// IMAGE_REGEXP
function images(str) {
  let array = [];
  array = str.match(IMAGE_REGEXP);
  console.log("array: ", array);
  if (array) {
    let image = `<span>${str.replace(IMAGE_REGEXP, "")}</span><br />`;
    for (let i = 0; i < array.length; i++) {
      image += `<a href = "${array[i]}" target = "_blank"><img style="width: 200px; height: 200px; padding: 5px 5px;" src="${array[i]}" /></a>`;
      console.log(array);
    }
    return image;
  } else {
    return "";
  }
}

// setInterval(
//   () =>
//     jsonPost("http://students.a-level.com.ua:10012", {
//       func: "getMessages",
//       messageId: numberOfMessage,
//     }).then((data) => {
//       console.log(data);
//       console.log("data.nextMessageId: ", data.nextMessageId);
//       numberOfMessage = data.nextMessageId;
//       let arr = [];
//       for (let key in data) {
//         if (key == "data") {
//           for (let index of data[key]) {
//             console.log(index);

//             // arr =
//             //   index.message.match(
//             //     /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
//             //   ) ||
//             //   index.message.match(/http(?:s?):\/\/(.*)(gif|jpe?g|bmp|png)$/gim);

//             // console.log("arr: ", arr);

//             // switch(arr[0]) {
//             //   case arr[0].match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/):
//             //     let youTube = youtube(index.message);
//             // }

//             let name = document.createElement("b");
//             let msg = document.createElement("span");
//             let time = document.createElement("i");
//             // let youTube = youtube(index.message);
//             name.innerText = `${index.nick}: `;
//             msg.innerHTML = `${index.message}`;
//             // msg.innerHTML = `${youTube}`;
//             time.innerHTML = `${new Date(index.timestamp)}</br>`;
//             msgOnServer.appendChild(time);
//             msgOnServer.appendChild(msg);
//             msgOnServer.appendChild(name);
//           }
//         }
//       }
//     }),
//   3000
// );