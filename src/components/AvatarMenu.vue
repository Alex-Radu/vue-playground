<template>
    <div class="avatar-menu">
        <div class="menu-header">
          <img src="../../assets/images/avatar.png" alt>
          <span>Alex Radu</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'avatar-menu',
};
</script>

<style lang="scss">
  .avatar-menu {
    box-shadow: 6px 6px 5px -4px rgba(130, 130, 130, .8);
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    .menu-header {
      background: #F87060;
      color: white;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      padding: 1rem;

      img {
        border-radius: 50%;
        box-shadow: 6px 6px 5px -4px rgba(130, 130, 130, .8);
        height: 3rem;
        width: 3rem;

        &:hover {
          cursor: pointer;
          box-shadow: 6px 6px 5px -4px rgb(98, 98, 98);
        }
      }

      span {
        align-self: center;
        margin-left: 1rem;
      }
    }

    nav {
      background: #D7E7ED;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          a {
            color: black;
            display: block;
            padding: .5rem;
            text-decoration: none;

            &:hover {
              background: #9BC3D3;
              color: white;
            }
          }
        }
      }
    }

  }
</style>
