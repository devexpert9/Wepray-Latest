import { Subject } from 'rxjs';
import { SharedService } from './../shared/services/shared.service';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AudioPlayerComponent } from 'ngx-audio-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showToolbar = false;
  status: boolean;
  isplay: boolean = false;
  todayQuotes: any;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
  onScroll($event) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 20;
    }
  }
  title: string = 'How can we pray for you today ?';
  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private sharedService: SharedService,
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.cd.detectChanges();
    this.topiclist;
    this.cd.detectChanges();
    this.shuffle(this.topiclist)
    this.todayQuotes = JSON.parse(localStorage.getItem('prayerValue'))


  }

  getData(id) {
    this.sharedService.publishData('');
    localStorage.setItem('id', id);
    this.router.navigate(['tabs/prayer/' + id]);
  }

  toggleVideo() {
    this.sharedService.publishData('');
    localStorage.setItem('id', this.todayQuotes.id)
    this.router.navigate(['tabs/prayer/' + this.todayQuotes.id]);
  }

  shuffle(array) {
    if (array.length == 2) {
      var b = array[0];
      array[0] = array[1];
      array[1] = b;
      return array;
    } else {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }
  }

  topiclist = [
    {
      id: 1,
      img: 'assets/img/icon1.svg',
      title: 'Discouraged',
      desc: '“Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go” Joshua 1:9',
    },
    {
      id: 2,
      img: 'assets/img/icon2.svg',
      title: 'Worried',
      desc: '“Instead of worrying, pray before you know it, a sense of God’s wholeness, everything coming together for good, will come and settle you down” Philippians 4:6',
    },
    {
      id: 3,
      img: 'assets/img/icon3.svg',
      title: 'Lonely',
      desc: '“I’ve picked you. I haven’t dropped you. Don’t panic. I’m with you. There’s no need to fear for I’m your God. I’ll give you strength. I’ll help you. I’ll hold you steady, keep a firm grip on you. Isaiah 41:10',
    },
    {
      id: 4,
      img: 'assets/img/icon4.svg',
      title: 'Depressed',
      desc: '“Is anyone crying for help? God is listening, ready to rescue you. If your heart is broken, you’ll find God right there; if you’re kicked in the gut, he’ll help you catch your breath. Psalm 34:17',
    },
    {
      id: 5,
      img: 'assets/img/icon5.svg',
      title: 'Peace',
      desc: '“Do not be anxious about anything, but in every situation, by prayer. present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds” Philippians 4:6',
    },
    {
      id: 6,
      img: 'assets/img/guilt.svg',
      title: 'Guilt',
      desc: '“This is how much God loved the world: He gave his Son, his one and only Son.. God came to help, to put the world right again. Anyone who trusts in him is acquitted“ John 3:16',
    },
    {
      id: 7,
      img: 'assets/img/tired.svg',
      title: 'Tired',
      desc: '“Are you tired? Worn out? . Get away with me and you’ll recover your life. I’ll show you how to take a real rest. Walk with me . learn the unforced rhythms of grace.. keep company with me and you’ll learn to live freely and lightly” Matthew 11:28',
    },
    {
      id: 8,
      img: 'assets/img/stressed.svg',
      title: 'Stressed',
      desc: '“My parting gift to you. Peace. I don’t leave you the way you’re used to being left—feeling abandoned, bereft. So don’t be upset. Don’t be  distraught. John 14:27',
    },
    {
      id: 9,
      img: 'assets/img/physicalpain.svg',
      title: 'Physical Pain',
      desc: '“Even though on the outside it often looks like things are falling apart on us, on the inside, where God is making new life, not a day goes by without his unfolding grace. These hard times are small potatoes compared to the coming good times, the lavish celebration prepared for us. 2 Corinthians 4:16',
    },
    {
      id: 10,
      img: 'assets/img/emotionalpain.svg',
      title: 'Emotional Pain',
      desc: '“Even though on the outside it often looks like things are falling apart on us, on the inside, where God is making new life, not a day goes by without his unfolding grace. These hard times are small potatoes compared to the coming good times, the lavish celebration prepared for us. 2 Corinthians 4:16',
    },
    {
      id: 11,
      img: 'assets/img/confused.svg',
      title: 'Confused',
      desc: '“Trust God from the bottom of your heart; don’t try to figure out everything on your own. Listen for God’s voice in everything you do, everywhere you go; he’s the one who will keep you on track. Proverbs 3:5',
    },
    {
      id: 12,
      img: 'assets/img/angry.svg',
      title: 'Angry',
      desc: '“Lead with your ears, follow up with your tongue, and let anger straggle along in the rear. God’s righteousness doesn’t grow from human anger. In simple humility, let God, landscape you with the Word, making a salvation-garden of your life. James 1:19-20',
    },
    {
      id: 13,
      img: 'assets/img/afraid.svg',
      title: 'Afraid',
      desc: '“I pulled you in from all over the world, called you in from every dark corner of the earth. I’ve picked you. I haven’t dropped you. Don’t panic. I’m with you. There’s no need to fear for I’m your God. I’ll give you strength. I’ll  help you. I’ll hold you steady, keep a firm grip on you. Isaiah 41:10-12',
    },
    {
      id: 14,
      img: 'assets/img/rejected.svg',
      title: 'Rejected',
      desc: '“God will never walk away from his people, never desert his precious people. Rest assured that justice is on its way and every good heart put right. Psalm 94:15',
    },
    {
      id: 15,
      img: 'assets/img/doubt.svg',
      title: 'Doubt',
      desc: '“Trust God from the bottom of your heart; don’t try to figure out everything on your own. Listen for God’s voice in everything you do, everywhere you go; he’s the one who will keep you on track. Proverbs 3:5-6',
    },
    {
      id: 16,
      img: 'assets/img/guidance.svg',
      title: 'Guidance',
      desc: '“By your words I can see where I’m going; they throw a beam of light on my dark path. Psalm 119:105',
    },
    {
      id: 17,
      img: 'assets/img/faith.svg',
      title: 'Faith',
      desc: '“If you embrace this kingdom life and don’t doubt God, you’ll not only do minor feats. but also triumph over huge obstacles. Matthew 21:21',
    },
    {
      id: 18,
      img: 'assets/img/strength.svg',
      title: 'Strength',
      desc: '“Be strong and courageous and do the work. Do not be afraid or discouraged, for the LORD God, my God is with you. He will not fail you or forsake you.” 1 Chronicles 28:20',
    },
    {
      id: 19,
      img: 'assets/img/forgiveness.svg',
      title: 'Forgiveness',
      desc: '“Pray very simply. Like this: Our Father in heaven, Reveal who you are. Set the world right. Keep us forgiven with you and forgiving others. You’re in charge! Matthew 6:9–15',
    },
    {
      id: 20,
      img: 'assets/img/relationships.svg',
      title: 'Relationships',
      desc: '“May God our Father himself and our Master Jesus clear the road to you! And may the Master pour on the love so it fills your lives and splashes over on everyone around you.! 1 Thessalonians 3:12',
    },
  ];

  onFeedBack() {
    this.emailComposer.open({
      to: ['reply@wepray.live'],
      subject: 'Feedback on wePray app',
    });
  }


}
