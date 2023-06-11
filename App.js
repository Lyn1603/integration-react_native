import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Menu, MenuDivider } from 'react-native-material-menu';
import React from 'react';

export default function App() {

  // VARIABLE DU MENU DEROULANT
  const [visible, setVisible] = React.useState(false);

  const showText = () => setVisible(true);
  
  const hideText = () => setVisible(false);

  return (
    <SafeAreaView style={{  width: 320, flexDirection: 'colunm' }}>

      {/* DEBUT NAVBAR  */}

        <View style={navbar.container}>
            <Image 
              source={require('./assets/logo.png')} 
              style={{ width: 53, height: 40, marginLeft: 10, marginTop: 5 }} 
            />

            
        <div style={{ marginRight : '10px'}}>

            <span style={styles.span1}> </span>
            <span style={styles.span2}> </span>
            <span style={styles.span3}> </span>
        </div>
 
        </View>
  
      {/* FIN NAVBAR  */}


      {/* DEBUT FAQ  */}

        <View style= {FAQ.faq}>
          <Text style={{fontWeight: 600}}> FAQ </Text>
        </View>

      {/* FIN FAQ  */}

      {/* DEBUT RECHERCHE  */}

      <View style={{ marginTop : '20px'}}>

        <View style={{marginLeft: ' 25px', backgroundColor: '#211D1D', opacity : '20%', borderRadius: '10px', width: '270px' , height: '33px', flexDirection: 'row', }}>

          <Image 
              source={require('./assets/search.png')} 
              style={{ width: 28, height: 28, marginLeft: 10, marginTop: 3 }} 
          />

          <Text style={{ color: '#FEFEFE', marginLeft: '50px', marginTop: '6px', fontWeight: 600, fontSize: '14px' }}> RECHERCHER </Text>

        </View>
 
      </View>


      {/* FIN RECHERCHE  */}

      {/* DEBUT QUESTIONS  */}

         {/* QUESTION 1 */}

      <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

      <Menu
          visible={visible}
          anchor={<Text onPress={showText} style={{marginLeft:'15px', marginTop: '10px', fontWeight: 600, }}>Comment faire un nouveau post ?</Text>}
          onRequestClose={hideText}
      >
      <Text onPress={hideText} style={{marginTop: '7px', height: '153px', width: '270px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}} >

      <Text style={{marginLeft:'10px', marginTop: '15px', fontWeight: 600, fontSize: '1rem' }}> Comment faire un nouveau post ? </Text>
      <div style={{textAlign: 'center', marginLeft:'5px', marginTop: '20px',   }}> Pour faire <Text style={{fontWeight: 600, color: '#9002C1'}}>un nouveau Post</Text> il faut cliquer  sur le bouton noir dans la bar
        de navigation en bas de l'écran. 
      </div>
        </Text>
      </Menu>

    </View>

       {/* QUESTION 2 */}

     <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

     <Text style={{marginLeft:'10px', marginTop: '10px', fontWeight: 600 }}> Comment voir ses mensurations ? </Text>

    </View>

       {/* QUESTION 3 */}
    <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

      <Text style={{marginLeft:'10px', marginTop: '10px', fontWeight: 600 }}> Comment ajouter aux favoris ? </Text>

    </View>

        {/* QUESTION 4 */}

    <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

      <Text style={{marginLeft:'10px', marginTop: '10px', fontWeight: 600 }}> Comment partager ? </Text>

    </View>

        {/* QUESTION 5 */}


    <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

      <Text style={{marginLeft:'10px', marginTop: '10px', fontWeight: 600 }}> Comment voir son niveau de badge ? </Text>

    </View>

        {/* QUESTION 6 */}


      
    <View style={{ marginTop: '30px', height: '40px', width: '270px', marginLeft: '25px', backgroundColor: '#E2CBEA', borderRadius: '10px', border: '#9002C1'}}>

      <Text style={{marginLeft:'10px', marginTop: '10px', fontWeight: 600 }}> Comment changer de status ? </Text>

    </View>



      {/* FIN QUESTIONS  */}


      {/* DEBUT FOOTER  */}

      <View style={footer.container}>

            <Image 
              source={require('./assets/icon_home.png')}
              style={{ width: 32, height: 30,  marginTop: 10 }} 
            />

            <Image 
              source={require('./assets/search.png')} 
              style={{ width: 32, height: 30,  marginTop: 10 }} 
            />

              <Image 
              source={require('./assets/icon_plus.png')} 
              style={{ width: 42, height: 40, marginTop: 6 }} 
            />

              <Image 
              source={require('./assets/icon_send.png')} 
              style={{ width: 32, height: 30,  marginTop: 10 }} 
            />

              <Image 
              source={require('./assets/icon_notification.png')} 
              style={{ width: 32, height: 30, marginTop: 10 }} 
            />

            
        
        </View>


      {/* FIN FOOTER  */}

    </SafeAreaView>
        
    
  );
}



// VARIABLES DE STYLES

const navbar = StyleSheet.create({
  container: {
    backgroundColor: '#9002C6',
    width: '100%',
    height: '52px', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',   
},
});

const styles = StyleSheet.create({
  span1: {
   backgroundColor: '#FEFEFE',
   display: 'flex',
   flexDirection: 'column',
   height: '3px',
   width: '45px',
   borderRadius: '10px',
   marginTop: '10px',
  },

  span2: {
    backgroundColor: '#FEFEFE',
    display: 'flex',
    flexDirection: 'column',
    height: '3px',
    width: '40px',
    borderRadius: '10px',
    marginTop: '10px',
  
   },

   span3: {
    backgroundColor: '#B3D2CC',
    display: 'flex',
    flexDirection: 'column',
    height: '3px',
    width: '30px',
    borderRadius: '10px',
    marginTop: '10px',
   },
});

const FAQ = StyleSheet.create({
  faq: {
  backgroundColor: '#B3D2CC',
    width: '100%',
    height: '31px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
  },
});

const footer = StyleSheet.create({
  container: {
    marginTop: '20px',
    backgroundColor: '#9002C6',
    width: '100%',
    height: '52px', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    gap: '30px',  
},
});
