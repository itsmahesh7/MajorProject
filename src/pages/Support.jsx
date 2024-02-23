import React from 'react';
import './support.css'
const Support = () => {
    return (
        <>
            <div className="heading">
                <img src="./IMG_20230705_215752.jpg" alt="" className="logo" />
            </div>
            <div className="mainbox">

                <h1><img src="photos/IMG_20230705_215752.jpg" alt="" className="./photos/contact-logo" />Contact-Us</h1>
                <div className="logodiv"><img src="./photos/phone-call.png" alt=""/><i>Call</i>
                    <div class="sub">
                        <li>Srikanth Vadithya(Core member): +919542005394</li>
                        <li>Lahari (Core member): +917287853605</li>
                        <li>V.Shivasai(Core member): +916303803073</li>
                    </div>
                </div>
                <div className="logodiv"><img src="./photos/instagram.png" alt=""/><i>Messager</i>
                    <div className="sub">
                        <li>UserName:<a> hopehousergukt</a></li>
                    </div>
                </div>
                <div className="logodiv"><img src="./photos/twitter.png" alt=""/><i>Twitter</i>
                    <div className="sub">
                        <li>UserName: <a href="www.twitter/hopehousergukt">hopehousergukt</a></li>
                    </div>
                </div>
                <div className="logodiv"><img src="./photos/whatsapp.png" alt=""/><i>WhatsApp</i>
                    <div className="sub">
                        <li>Srikanth Vadithya(Core member): +919542005394</li>
                        <li>Lahari (Core member): +917287853605</li>
                        <li>V.Shivasai(Core member): +916303803073</li>
                    </div>
                </div>
                <div className="logodiv"><img src="./photos/post-office.png" alt=""/><i>Mail</i>
                    <div className="sub">
                        mail@1: <a href="www.google.com/mail/hopehouserguktb@gmail.com">hopehouserguktb@gmail.com</a><br/>
                            mail@2: <a href="www.google.com/mail/hopehouse@rgukt.ac.in">hopehouse@rgukt.ac.in</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Support;