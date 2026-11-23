# Manifest Generator Script
import json
from pathlib import Path
from PIL import Image

raw_base = Path('public/images/raw')

manifest = []

for folder in sorted(raw_base.iterdir()):
    if not folder.is_dir(): continue
    for file in sorted(folder.iterdir()):
        if not file.is_file(): continue
        
        with Image.open(file) as img:
            w, h = img.size
            orient_tag = img.getexif().get(274, 1)
            
        orientation = 'landscape' if w > h else ('portrait' if h > w else 'square')
        size_kb = round(file.stat().st_size / 1024, 1)
        rel_path = f'public/images/raw/{folder.name}/{file.name}'
        
        # Defaults
        category = 'other'
        quality = 4 if w >= 1200 else 3
        focal_point = 'center'
        suitable_for = ['unassigned']
        flags = []
        desc = ''
        
        fname = file.name
        fold = folder.name
        
        if w < 1200:
            flags.append('low-res')
            
        if fold == '06.08.2020':
            flags.append('shows recognisable public figure')
            flags.append('video-still')
            if 'Still003' in fname:
                desc = 'Dignitaries wearing protective face masks on an outdoor stage viewing the virtual marathon registration procedure screen.'
                category = 'dignitaries-stage'
                quality = 4
                focal_point = 'center-left'
                suitable_for = ['journey-2020', 'unassigned']
            elif 'Still001' in fname:
                desc = 'Overhead angle of officials on stage before the LED screen showing the official website address kalaignarmarathon.com.'
                category = 'branding-banners-posters'
                quality = 4
                focal_point = 'top-center'
                flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif 'Still002' in fname:
                desc = 'Inaugural 2020 launch stage with LED backdrop displaying Kalaignar Memorial International Virtual Marathon title and motto.'
                category = 'branding-banners-posters'
                quality = 4
                focal_point = 'center'
                suitable_for = ['journey-2020']
                flags.append('primary-choice-2020')
                
        elif fold == '07.09.2021':
            flags.append('shows recognisable public figure')
            quality = 5
            if fname == 'IMG_20210907_180917.jpg':
                desc = 'Chief Minister M.K. Stalin and dignitaries receiving the Asia Book of Records certificate on stage for the 2021 virtual marathon.'
                category = 'medals-certificates-awards'
                focal_point = 'center'
                suitable_for = ['journey-2021']
                flags.append('primary-choice-2021')
            elif fname == 'IMG_20210907_181017.jpg':
                desc = 'Presentation of the Rs 56,02,693 donation cheque for the Chief Minister Public Relief Fund on stage at Kalaignar Arangam.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                suitable_for = ['built-on-purpose-charity', 'journey-2021']
                flags.append('primary-choice-charity')
            elif fname == 'IMG_20210907_181058.jpg':
                desc = 'Medium shot of Chief Minister M.K. Stalin receiving the Rs 56.02 lakh COVID-19 relief donation cheque on stage.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname == 'IMG_20210907_181157.jpg':
                desc = 'Wide stage view of dignitaries and organizers holding the Rs 56.02 lakh donation cheque for COVID-19 relief.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname == 'IMG_20210907_181248.jpg':
                desc = 'Full stage view of the Rs 56.02 lakh cheque handover under the Kalaignar Arangam hall banner.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('near-duplicate')
                suitable_for = ['unassigned']

        elif fold == '2023':
            quality = 5
            if fname == 'Sequence 01.00_00_26_13.Still001.jpg':
                desc = 'Panoramic high-angle view of thousands of runners assembled under the illuminated START arch at 5:34 AM.'
                category = 'crowd-mass-start'
                focal_point = 'center'
                suitable_for = ['hero']
                flags.append('primary-choice-hero')
            elif fname == 'DJI_0042.JPG':
                desc = 'Aerial drone view of thousands of runners moving along Kamarajar Salai and the coastal Marina beachfront in daylight.'
                category = 'runners-action'
                focal_point = 'center'
                suitable_for = ['marathon-city', 'hero', 'statement-right']
                flags.append('drone-shot')
                flags.append('primary-choice-city')
            elif fname in ['DJI_0045.JPG', 'DJI_0046.JPG', 'DJI_0060.JPG', 'DJI_0028.JPG']:
                desc = 'Expansive aerial perspective of 73,000+ runners gathered across the post-race event grounds in bright neon t-shirts.'
                category = 'crowd-mass-start'
                focal_point = 'center'
                flags.append('drone-shot')
                if fname != 'DJI_0045.JPG': flags.append('near-duplicate')
                suitable_for = ['partner-p3' if fname == 'DJI_0045.JPG' else 'unassigned']
            elif fname == 'DJI_0052.JPG':
                desc = 'Overhead drone view of runners and disciplined marching contingents proceeding along the avenue.'
                category = 'inclusivity-transgender-disabled-uniformed'
                focal_point = 'center'
                flags.append('drone-shot')
                suitable_for = ['inclusivity']
            elif fname.startswith('IMG0008'):
                desc = 'Early morning 3:49 AM flag-off moment on stage under the Centenary Marathon banner.'
                category = 'dignitaries-stage'
                focal_point = 'center-right'
                flags.append('shows recognisable public figure')
                if fname == 'IMG00082.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname == 'IMG00336.JPG':
                desc = 'Youth Welfare and Sports Minister Udhayanidhi Stalin and Health Minister Ma. Subramanian waving to runners from stage.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                suitable_for = ['partner-p1']
            elif fname in ['IMG00722.JPG', 'IMG00723.JPG']:
                desc = 'Chief Minister M.K. Stalin receiving the official Guinness World Records certificate on stage from the adjudicator.'
                category = 'medals-certificates-awards'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('guinness-world-record')
                if fname == 'IMG00723.JPG': flags.append('near-duplicate')
                suitable_for = ['hero-thumbnail', 'journey-2023']
                if fname == 'IMG00722.JPG': flags.append('primary-choice-thumbnail')
            elif fname in ['IMG00784.JPG', 'IMG00787.JPG']:
                desc = 'Ceremonial presentation of the Rs 3,42,50,000 donation cheque to Government Royapettah Hospital on stage.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname == 'IMG00787.JPG': flags.append('near-duplicate')
                suitable_for = ['built-on-purpose-charity']
            elif fname in ['P4149398.JPG', 'P4149399.JPG', 'P4149401.JPG']:
                desc = 'Dignitaries holding the yellow Centenary flag on stage with official Kalaignar volunteers in foreground.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname != 'P4149398.JPG': flags.append('near-duplicate')
                suitable_for = ['partner-p1']
            elif fname in ['P4149459.JPG', 'P4149461.JPG']:
                desc = 'Runners of all ages surging past the START timing gantry under night floodlights at the Centenary edition.'
                category = 'crowd-mass-start'
                focal_point = 'center'
                if fname == 'P4149461.JPG': flags.append('near-duplicate')
                suitable_for = ['inclusive-by-design', 'hero-thumbnail']
                if fname == 'P4149459.JPG': flags.append('primary-choice-inclusivity')
            elif fname in ['P4159838.JPG', 'P4159840.JPG', 'P4159843.JPG']:
                desc = 'Guinness World Record adjudicator officially handing the certificate to Chief Minister M.K. Stalin on stage.'
                category = 'medals-certificates-awards'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('guinness-world-record')
                if fname != 'P4159838.JPG': flags.append('near-duplicate')
                suitable_for = ['journey-2023']
                if fname == 'P4159838.JPG': flags.append('primary-choice-2023')
            elif fname.startswith('P416011'):
                desc = 'Chief Minister M.K. Stalin delivering his address from the podium at the Centenary Marathon ceremony.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('portrait-orientation')
                if fname != 'P4160115.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname.startswith('P416012') or fname.startswith('P416013'):
                desc = 'Wide view of the centenary award stage with international runners and ministers seated.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname == 'P4160130.JPG': flags.append('near-duplicate')
                suitable_for = ['partner-p1']

        elif fold == '29.3.2022':
            # 2022 3rd Edition Marathon
            quality = 5
            if fname.startswith('00162.'):
                desc = 'Overhead video still of the 2022 marathon start line with thousands of runners in yellow shirts.'
                category = 'crowd-mass-start'
                quality = 4
                focal_point = 'center'
                flags.append('video-still')
                if fname != '00162.00_29_46_22.Still001.jpg': flags.append('near-duplicate')
                suitable_for = ['journey-2022' if fname == '00162.00_29_46_22.Still001.jpg' else 'unassigned']
            elif fname.startswith('00271.'):
                desc = 'Aerial perspective looking down the long tree-shaded avenue packed with 43,000+ runners in yellow shirts at Besant Nagar.'
                category = 'crowd-mass-start'
                quality = 4
                focal_point = 'center'
                flags.append('video-still')
                if fname != '00271.02_19_35_11.Still001.jpg': flags.append('near-duplicate')
                suitable_for = ['journey-2022' if fname == '00271.02_19_35_11.Still001.jpg' else 'unassigned']
                if fname == '00271.02_19_35_11.Still001.jpg': flags.append('primary-choice-2022')
            elif fname.startswith('0R8A185') or fname.startswith('0R8A186'):
                desc = 'Evening stage preparations and soundcheck for the 2022 3rd Edition Marathon.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('near-duplicate' if fname == '0R8A1860.JPG' else 'prep-rehearsal')
                suitable_for = ['unassigned']
            elif fname.startswith('0R8A20'):
                desc = 'Member of Parliament Kanimozhi Karunanidhi and Udhayanidhi Stalin flagging off runners on stage on August 6 evening.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname != '0R8A2085.JPG': flags.append('near-duplicate')
                suitable_for = ['partner-p1' if fname == '0R8A2085.JPG' else 'unassigned']
            elif fname.startswith('IMG0006') or fname.startswith('IMG0008') or fname.startswith('IMG0009'):
                desc = 'Flag-off moment at 4:00 AM under the illuminated race truss for the full marathon distance.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname != 'IMG00067.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname.startswith('IMG005'):
                desc = 'Morning award stage featuring the golden memorial bust of Kalaignar Karunanidhi adorned with garlands under a canopy.'
                category = 'dignitaries-stage'
                focal_point = 'center-left'
                flags.append('shows recognisable public figure')
                flags.append('commemorative-bust')
                if fname != 'IMG00596.JPG': flags.append('near-duplicate')
                suitable_for = ['built-on-purpose-commemoration' if fname == 'IMG00596.JPG' else 'unassigned']
                if fname == 'IMG00596.JPG': flags.append('primary-choice-commemoration')
            elif fname.startswith('IMG0062') or fname.startswith('IMG0063') or fname.startswith('IMG0064') or fname.startswith('IMG0065'):
                desc = 'Chief Minister M.K. Stalin and leaders presenting the Rs 1,20,69,950 donation cheque to the Institute of Child Health.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('charity-cheque')
                if fname != 'IMG00652.JPG': flags.append('near-duplicate')
                suitable_for = ['built-on-purpose-charity']
            elif fname.startswith('IMG0067') or fname.startswith('IMG0068') or fname.startswith('IMG0069') or fname.startswith('IMG0070'):
                desc = 'Asia Book of Records representative presenting the record citation for Largest Memorial Marathon in Asia to Chief Minister M.K. Stalin.'
                category = 'medals-certificates-awards'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname != 'IMG00703.JPG': flags.append('near-duplicate')
                suitable_for = ['journey-2022', 'unassigned']
            elif fname == 'PVC_8195.JPG':
                desc = 'Early morning 5:02 AM start line with runners running across timing sensors beneath the branded race truss.'
                category = 'runners-action'
                focal_point = 'center-left'
                flags.append('night-running')
                suitable_for = ['partner-p2']
                flags.append('primary-choice-branding')
            elif fname.startswith('PVC_83'):
                if fname == 'PVC_8361.JPG':
                    desc = 'Ecstatic runners surging forward at the daylight start line amidst blue balloons and cascading confetti.'
                    category = 'crowd-mass-start'
                    focal_point = 'center'
                    suitable_for = ['statement-left', 'partner-p4']
                    flags.append('primary-choice-statement-left')
                elif fname == 'PVC_8371.JPG':
                    desc = 'Diverse participants including women, youth, and uniformed police personnel running happily together.'
                    category = 'inclusivity-transgender-disabled-uniformed'
                    focal_point = 'center'
                    suitable_for = ['inclusive-by-design', 'partner-p4']
                elif fname == 'PVC_8380.JPG':
                    desc = 'Energetic mass of runners in bright yellow Kalaignar Memorial shirts smiling as they begin their run.'
                    category = 'crowd-mass-start'
                    focal_point = 'center'
                    suitable_for = ['partner-p4']
                    flags.append('primary-choice-partner-p4')
                else:
                    desc = 'Daylight start line sequence with thousands of enthusiastic runners charging across the start line.'
                    category = 'crowd-mass-start'
                    focal_point = 'center'
                    flags.append('near-duplicate')
                    suitable_for = ['unassigned']
            elif fname.startswith('PVC_86'):
                desc = 'Presentation of the Rs 1,20,69,950 marathon registration proceeds cheque to the Director of the Institute of Child Health and Hospital.'
                category = 'charity-handover-cheque'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                flags.append('charity-cheque')
                if fname != 'PVC_8620.JPG': flags.append('near-duplicate')
                suitable_for = ['built-on-purpose-charity']
                if fname == 'PVC_8620.JPG': flags.append('primary-choice-charity')

        elif fold == '07.08.2024':
            quality = 5
            flags.append('shows recognisable public figure')
            flags.append('hospital-infrastructure-milestone')
            flags.append('post-2023-milestone')
            if int(fname[5:8]) < 200:
                desc = 'Minister Udhayanidhi Stalin and officials reviewing architectural floor plans for the new hospital building.'
                category = 'other'
                focal_point = 'center-right'
                if fname != 'P5415169.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
            else:
                desc = 'Foundation stone laying ceremony for the Royapettah Hospital cancer treatment centre funded by the 2023 marathon.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                if fname != 'P5415238.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']

        elif fold == '25.02.2026':
            quality = 5
            flags.append('hospital-infrastructure-milestone')
            flags.append('egmore-shelter-inauguration')
            if fname in ['IMG08188.JPG', 'IMG08190.JPG']:
                desc = 'Exterior view of the newly completed patient attendants shelter building at Egmore Children Hospital funded by the marathon.'
                category = 'other'
                focal_point = 'center'
                flags.append('architecture-building')
                if fname == 'IMG08190.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
            elif fname == 'IMG08340.JPG':
                desc = 'Minister Udhayanidhi Stalin cutting the ceremonial ribbon to inaugurate the Egmore Hospital attendants shelter.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                suitable_for = ['unassigned']
            else:
                desc = 'Inauguration ceremony plaque unveiling for the Kalaignar Marathon funded attendant shelter at Egmore Hospital.'
                category = 'dignitaries-stage'
                focal_point = 'center'
                flags.append('shows recognisable public figure')
                if fname != 'P8091796.JPG': flags.append('near-duplicate')
                suitable_for = ['unassigned']
                
        manifest.append({
            'originalPath': rel_path,
            'folder': fold,
            'filename': fname,
            'width': w,
            'height': h,
            'orientation': orientation,
            'fileSizeKB': size_kb,
            'description': desc,
            'category': category,
            'quality': quality,
            'focalPoint': focal_point,
            'suitableFor': suitable_for,
            'flags': flags
        })

print(f'Total manifest entries: {len(manifest)}')
with open('docs/photo-manifest.json', 'w', encoding='utf-8') as out:
    json.dump(manifest, out, indent=2, ensure_ascii=False)
print('Saved to docs/photo-manifest.json successfully!')
