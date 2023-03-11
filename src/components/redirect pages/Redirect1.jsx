import React, { useEffect } from 'react'
import './redirect.css'
import Load from '../../assest/a.svg'

const Redirect1 = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.replace('https://www.booking.com/searchresults.en-gb.html?aid=807183&label=metatrivago-hotel-1694884_xqdz-53230f_los-2_nrm-1_gstadt-2_gstkid-0_curr-usd_lang-en_mcid-10_dev-dsk_losb-2_bw-3_bwb-2_pg-0_dd-0_gsb-2_sl-0_w-0_tstar-0_trat-0_tprc-tprcd_tamnt-0_cod-1678205980_trvref-352f2cc3-d9be-36a8-a01f-1fe0c5f517bb&sid=775aae3c4337b20359b6c0e4cd5b065a&checkin=2023-03-10&checkout=2023-03-12&city=-290029&group_adults=2&group_children=0&highlighted_hotels=1694884&hlrd=with_dates&keep_landing=1&no_rooms=1&redirected=1&selected_currency=USD&show_room=169488402_262856998_2_85_0&source=hotel&trv_curr=USD&trv_dp=199&utm_campaign=sa&utm_content=los-2_nrm-1_gstadt-2_gstkid-0_curr-usd_lang-en_mcid-10_dev-dsk_losb-2_bw-3_bwb-2_pg-0_dd-0_gsb-2_sl-0_w-0_tstar-0_trat-0_tprc-tprcd_tamnt-0_cod-1678205980_trvref-352f2cc3-d9be-36a8-a01f-1fe0c5f517bb&utm_medium=meta&utm_source=metatrivago&utm_term=hotel-1694884&room1=A,A,;');
        }, 3000);
    
        return () => clearTimeout(timeout);
      }, []);
  return (
    <div className='con'>
        <img src={Load} alt="" />
       <p className='text'>
            you are going to <br /> have best Deals
        </p> 
        <div id="secondsdisplay"></div>
    </div>
  )
}

export default Redirect1